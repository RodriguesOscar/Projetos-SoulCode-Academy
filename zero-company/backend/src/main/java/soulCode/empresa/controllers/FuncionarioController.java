package soulCode.empresa.controllers;

import java.net.URI;
import java.util.List;

import javax.websocket.server.PathParam;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Equipe;
import soulCode.empresa.services.FuncionarioService;


@CrossOrigin @RestController @RequestMapping("empresa")
public class FuncionarioController {
	
	// precisamos da injeção de dependências
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	@GetMapping("/funcionario")
	public List<Funcionario> mostrarTodosFuncionarios(){
		List<Funcionario> funcionario = funcionarioService.mostrarTodosFuncionarios();
		return funcionario;
	}
	
	@GetMapping("/funcionario-equipe")
	public List<List> funcionariosComEquipe(){
		List<List> funcionarioEquipe = funcionarioService.funcionariosComEquipe();
		return funcionarioEquipe;
	}
	
	@GetMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<?> buscarUmFuncionario(@PathVariable Integer id_funcionario){
		Funcionario funcionario  = funcionarioService.buscarUmFuncionario(id_funcionario);
		return ResponseEntity.ok().body(funcionario);	
	}
	
	@GetMapping("/funcionario/busca-equipe/{id_equipe}")
	public List<Funcionario> buscarFuncionarioEquipe(@PathVariable Integer id_equipe){
		List<Funcionario> funcionario = funcionarioService.buscarFuncionarioEquipe(id_equipe);
		return funcionario;
	}
	
	@GetMapping("/funcionario-nome/{func_nome}")
	public ResponseEntity<Funcionario> buscarFuncionarioPeloNome(@PathVariable String func_nome){
		Funcionario funcionario = funcionarioService.buscarFuncionarioPeloNome(func_nome);
		return ResponseEntity.ok().body(funcionario);
	}
	
	@PutMapping("/funcionario/inserirEquipe/{id_funcionario}")
	public ResponseEntity<Funcionario> inserirFuncionarioNaEquipe(@PathVariable Integer id_funcionario, @RequestBody Equipe equipe){
		Funcionario funcionario = funcionarioService.inserirFuncionarioNaEquipe(id_funcionario, equipe);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/deixarSemEquipe/{id_funcionario}")
	public ResponseEntity<Funcionario> deixarFuncionarioSemEquipe(@PathVariable Integer id_funcionario){
		Funcionario funcionario = funcionarioService.deixarFuncionarioSemEquipe(id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/funcionario")
	public ResponseEntity<Funcionario> InserirFuncionario(@RequestBody Funcionario funcionario){
		funcionario = funcionarioService.InserirFuncionario(funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(funcionario.getId_funcionario()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
	@DeleteMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> deletarUmFuncionario(@PathVariable Integer id_funcionario){
		funcionarioService.deletarUmFuncionario(id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setId_funcionario(id_funcionario);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}
	
	
}



//@PostMapping("/funcionario")
//public ResponseEntity<Funcionario> InserirFuncionario(@RequestParam(value="equipe")Integer id_equipe,
//		@RequestBody Funcionario funcionario){
//	funcionario = funcionarioService.InserirFuncionario(id_equipe,funcionario);
//	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}")
//			.buildAndExpand(funcionario.getId_funcionario()).toUri();
//	return ResponseEntity.created(uri).build();	
//}

//@PutMapping("/funcionario/{id_funcionario}/")
//public ResponseEntity<Void> editarFuncionario(@RequestParam(value="equipe")Equipe equipe, @PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario){
//	funcionario.setId_funcionario(id_funcionario);
//	funcionario.setEquipe(equipe);
//	funcionario = funcionarioService.editarFuncionario(funcionario);
//	return ResponseEntity.noContent().build();
//}