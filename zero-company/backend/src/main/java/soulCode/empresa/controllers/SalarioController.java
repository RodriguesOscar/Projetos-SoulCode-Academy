package soulCode.empresa.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Salario;
import soulCode.empresa.services.SalarioService;

@CrossOrigin @RestController @RequestMapping("empresa")
public class SalarioController {
	
	@Autowired
	private SalarioService salarioService;
	
	@GetMapping("/funcionario/salario")
	public List<Salario> BuscarTodosSalarios(){
		List<Salario> salario = salarioService.buscarTodosSalarios();
		return salario;
	}
	
	@GetMapping("/funcionario/salario/{codigo}")
	public ResponseEntity<Salario> buscarUmSalario(@PathVariable Integer codigo){
		Salario salario  = salarioService.buscarUmSalario(codigo);
		return ResponseEntity.ok().body(salario);
		
	}
	
	@GetMapping("/funcionario/salariosDoFuncionario/{id_funcionario}")
	public List<Salario> buscarSalariosDoFuncionario(@PathVariable Integer id_funcionario){
		List<Salario> salario = salarioService.buscarSalariosDoFuncionario(id_funcionario);
		return salario;
	}
	
	@PostMapping("/funcionario/salario/{id_funcionario}")
	public ResponseEntity<Salario> InserirSalario(@RequestBody Salario salario, @PathVariable Integer id_funcionario){
		salario = salarioService.InserirSalario(salario,id_funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(salario.getCodigo()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
	@PutMapping("/funcionario/pagarSalario/{codigo}")
	public ResponseEntity<Salario> pagarSalario(@PathVariable Integer codigo){
		salarioService.pagarSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/cancelarSalario/{codigo}")
	public ResponseEntity<Salario> cancelarSalario(@PathVariable Integer codigo){
		salarioService.cancelarSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/funcionario/salario/{codigo}")
	public ResponseEntity<Void> deletarUmSalario(@PathVariable Integer codigo){
		salarioService.deletarUmSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/salario/{codigo}/{id_funcionario}")
	public ResponseEntity<Salario> editarSalario(@RequestBody Salario salario, @PathVariable Integer codigo, @PathVariable Integer id_funcionario){
		salarioService.editarSalario(salario,codigo, id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	
}
