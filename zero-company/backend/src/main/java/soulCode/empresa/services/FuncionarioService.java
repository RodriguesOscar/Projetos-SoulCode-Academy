package soulCode.empresa.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Equipe;
import soulCode.empresa.repositories.FuncionarioRepository;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private EquipeService equipeService;
	
	public List<Funcionario> mostrarTodosFuncionarios(){
		return funcionarioRepository.findAll();
	}
	
	public List<List> funcionariosComEquipe(){
		return funcionarioRepository.funcionariosComEquipe();
	}
	
	public Funcionario buscarUmFuncionario(Integer id_funcionario) {
		Optional<Funcionario> funcionario = funcionarioRepository.findById(id_funcionario);
		return funcionario.orElseThrow();
	}
	
	public List<Funcionario> buscarFuncionarioEquipe(Integer id_equipe){
		List<Funcionario> funcionario = funcionarioRepository.fetchByEquipe(id_equipe);
		return funcionario;
	}
	
	public Funcionario inserirFuncionarioNaEquipe(Integer id_funcionario, Equipe equipe) {
		Funcionario funcionario = buscarUmFuncionario(id_funcionario);
		funcionario.setEquipe(equipe);
		return funcionarioRepository.save(funcionario);
	}
	
	public Funcionario buscarFuncionarioPeloNome(String func_nome){
		Funcionario funcionario = funcionarioRepository.fetchByName(func_nome);
		return funcionario;
	}
	
	public Funcionario deixarFuncionarioSemEquipe(Integer id_funcionario) {
		Funcionario funcionario = buscarUmFuncionario(id_funcionario);
		funcionario.setEquipe(null);
		return funcionarioRepository.save(funcionario);
	}
	
	public Funcionario InserirFuncionario(Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		return funcionarioRepository.save(funcionario);
	}
	
	public void deletarUmFuncionario(Integer id_funcionario) {
		funcionarioRepository.deleteById(id_funcionario);
	}
	
	public Funcionario editarFuncionario(Funcionario funcionario) {
		buscarUmFuncionario(funcionario.getId_funcionario());
		return funcionarioRepository.save(funcionario);
	}
	
	public Funcionario salvarFoto(Integer id_funcionario, String caminhoFoto) {
	Funcionario funcionario = buscarUmFuncionario(id_funcionario);
	funcionario.setFunc_foto(caminhoFoto);
	return funcionarioRepository.save(funcionario);
	}
	
}


//public Funcionario InserirFuncionario(Integer id_equipe,Funcionario funcionario) {
//	funcionario.setId_funcionario(null);
//	Equipe equipe = equipeService.buscarUmaEquipe(id_equipe);
//	funcionario.setEquipe(equipe);
//	return funcionarioRepository.save(funcionario);
//}

//public List<Funcionario> buscarFuncionarioEquipe(Integer id_equipe){
//List<Funcionario> funcionario = funcionarioRepository.fetchByEquipe(id_equipe);
//return funcionario;
//}