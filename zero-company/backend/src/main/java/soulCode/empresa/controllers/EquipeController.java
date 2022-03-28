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

import soulCode.empresa.models.Equipe;
import soulCode.empresa.services.EquipeService;
import soulCode.empresa.models.Projeto;


@CrossOrigin
@RestController
@RequestMapping("empresa")
public class EquipeController {
	
	@Autowired
	private EquipeService equipeService;
	
	@GetMapping("/equipe")
	public List<Equipe> mostrarTodasEquipes(){
		List<Equipe> equipe = equipeService.mostrarTodasEquipes();
		return equipe;
	}
	
	@GetMapping("/equipe/{id_equipe}")
	public ResponseEntity<Equipe> buscarUmaEquipe(@PathVariable Integer id_equipe){
		Equipe equipe = equipeService.buscarUmaEquipe(id_equipe);
		return ResponseEntity.ok().body(equipe);
	}
	
	@GetMapping("/equipeSemProjeto")
	public List<Equipe> projetoSemEquipe(){
		List<Equipe> equipe = equipeService.equipeSemProjeto();
		return equipe;
	}
	@GetMapping("/equipe/equipe-projeto/{id_projeto}")
	public Equipe equipeDoProjeto(@PathVariable Integer id_projeto){
		
		return equipeService.equipeDoProjeto(id_projeto);
	}
	
	@GetMapping("/equipe/equipe-projeto")
	public List<List> equipesComProjeto(){
		List<List> equipeProjeto = equipeService.equipeComSeuProjeto();
		return equipeProjeto;
	}
	
	@PostMapping("/equipe")
	public ResponseEntity<Equipe> cadastrarEquipe(@RequestParam(value="projeto", required = false)Integer id_projeto,@RequestBody Equipe equipe){
		equipe = equipeService.cadastrarEquipe(id_projeto,equipe);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(equipe.getId_equipe()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/equipe/{id_equipe}")
	public ResponseEntity<Void> editarEquipe(@PathVariable Integer id_equipe, @RequestBody Equipe equipe){
		equipe.setId_equipe(id_equipe);
		equipe = equipeService.editarEquipe(equipe);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/equipe/{id_equipe}")
	public ResponseEntity<Equipe> deletarUmEquipe(@PathVariable Integer id_equipe){
		equipeService.deletarUmEquipe(id_equipe);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/equipe/definirProjeto/{id_equipe}/{id_projeto}")
	public ResponseEntity<Projeto> atribuirProjeto(@PathVariable Integer id_equipe, @PathVariable Integer id_projeto){
		equipeService.atribuirProjeto(id_equipe, id_projeto);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/equipe/tirarProjeto/{id_equipe}/{id_projeto}")
	public ResponseEntity<Projeto> deixarEquipeSemProjeto(@PathVariable Integer id_equipe, @PathVariable Integer id_projeto){
		equipeService.deixarEquipeSemProjeto(id_equipe, id_projeto);
		return ResponseEntity.noContent().build();
	}
	
}



//@PostMapping("/equipe")
//public ResponseEntity<Void> cadastrarEquipe(@RequestBody Equipe equipe){
//	equipe = equipeService.cadastrarEquipe(equipe);
//	
//	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//			.buildAndExpand(equipe.getId_equipe()).toUri();
//	
//	return ResponseEntity.created(uri).build();
//}