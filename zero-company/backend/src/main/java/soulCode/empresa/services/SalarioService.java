package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Salario;
import soulCode.empresa.models.StatusTitulo;
import soulCode.empresa.repositories.SalarioRepository;

@Service
public class SalarioService {
	
	@Autowired
	private SalarioRepository salarioRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	public List<Salario> buscarTodosSalarios(){
		return salarioRepository.findAll();
	}
	
	public Salario buscarUmSalario(Integer codigo) {
		Optional<Salario> salario = salarioRepository.findById(codigo);
		return salario.orElseThrow();
	}
	
	public List<Salario> buscarSalariosDoFuncionario(Integer id_funcionario){
		List<Salario> salario = salarioRepository.buscarSalariosDoFuncionario(id_funcionario);
		return salario;
	}
	
	public Salario InserirSalario(Salario salario, Integer id_funcionario) {
		salario.setCodigo(null);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		salario.setFuncionario(funcionario);
		return salarioRepository.save(salario);
	}
	
	public Salario pagarSalario(Integer codigo) {
		Salario salario = buscarUmSalario(codigo);
		StatusTitulo status = StatusTitulo.RECEBIDO;
		salario.setSl_status(status);
		return salarioRepository.save(salario);
		
	}
	
	public Salario cancelarSalario(Integer codigo) {
		Salario salario = buscarUmSalario(codigo);
		StatusTitulo status = StatusTitulo.CANCELADO;
		salario.setSl_status(status);
		return salarioRepository.save(salario);
		
	}
	
	public Salario editarSalario(Salario salario, Integer codigo, Integer id_funcionario) {
		buscarUmSalario(codigo);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		salario.setFuncionario(funcionario);
		return salarioRepository.save(salario);
	}
	
	public void deletarUmSalario(Integer codigo) {
		salarioRepository.deleteById(codigo);
	}
	
}
