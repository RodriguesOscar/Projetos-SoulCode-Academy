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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.models.Projeto;
import soulCode.empresa.models.Equipe;
import soulCode.empresa.models.Projeto;
import soulCode.empresa.services.ProjetoService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class ProjetoController {

	@Autowired
	private ProjetoService projetoService;
	
	@GetMapping("/projeto")
	public List<Projeto> mostrarTodosProjetos(){
		List<Projeto> projeto = projetoService.mostrarTodosProjetos();
		return projeto;
	}
	
	@GetMapping("/projeto/{id_projeto}")
	public ResponseEntity<Projeto> mostrarUmProjeto(@PathVariable Integer id_projeto) {
		Projeto projeto = projetoService.mostrarUmProjeto(id_projeto);
		return ResponseEntity.ok().body(projeto);
	}
	
	@GetMapping("/projeto-equipe/{id_equipe}")
	public ResponseEntity<Projeto> buscarProjetoDaEquipe(@PathVariable Integer id_equipe){
		Projeto projeto = projetoService.buscarProjetoDaEquipe(id_equipe);
		return ResponseEntity.ok().body(projeto);
	}
	
	@GetMapping("/projetoSemEquipe")
	public List<Projeto> projetoSemEquipe(){
		List<Projeto> projeto = projetoService.projetoSemEquipe();
		return projeto;
	}
	
	@GetMapping("/projeto/projeto-equipe")
	public List<List> projetosComEquipe(){
		List<List> projetoEquipe = projetoService.ProjetoComSuaEquipe();
		return projetoEquipe;
	}
	
	@PostMapping("/projeto")
	public ResponseEntity<Projeto> InserirProjetoComEquipe(@RequestParam(value="equipe", required = false)Integer id_equipe,@RequestBody Projeto projeto){
		projeto = projetoService.inserirProjeto(id_equipe, projeto);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(projeto.getId_projeto()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/projeto/{id_projeto}")
	public ResponseEntity<Projeto> editarProjeto(@RequestParam(value="equipe")Equipe equipe, @PathVariable Integer id_projeto, @RequestBody Projeto projeto){
		projeto.setId_projeto(id_projeto);
		projeto.setEquipe(equipe);
		equipe.setProjeto(projeto);
		projeto = projetoService.editarProjeto(projeto);
		
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/projeto-sem-equipe/{id_projeto}")
	public ResponseEntity<Void> editarProjetoSemEquipe(@PathVariable Integer id_projeto, @RequestBody Projeto projeto){
		projeto.setId_projeto(id_projeto);
		projeto = projetoService.editarProjetoSemEquipe(projeto);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/projeto/{id_projeto}")
	public ResponseEntity<Void> deletarUmProjeto(@PathVariable Integer id_projeto){
		projetoService.deletarUmProjeto(id_projeto);
		return ResponseEntity.noContent().build();
	}
	
}



//@PostMapping("/projeto")
//public ResponseEntity<Projeto> InserirProjeto(@RequestParam(value="equipe", required = false)Integer id_equipe, @RequestBody Projeto projeto){
//	projeto = projetoService.inserirProjeto(id_equipe, projeto);
//	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(projeto.getId_projeto()).toUri();
//	
//	return ResponseEntity.created(uri).build();
//}
//
//@PutMapping("/projeto/{id_projeto}")
//public ResponseEntity<Projeto> editarProjeto(@RequestParam(value="equipe", required = false)Integer id_equipe, @PathVariable Integer id_projeto, @RequestBody Projeto projeto){
//	projeto.setId_projeto(id_projeto);
//	projeto = projetoService.editarProjeto(id_equipe, projeto);
//	return ResponseEntity.noContent().build();
//}