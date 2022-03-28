package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import soulCode.empresa.models.Equipe;
import soulCode.empresa.repositories.EquipeRepository;
import soulCode.empresa.services.exceptions.ObjectNotFoundException;
import soulCode.empresa.models.Projeto;

@Service
public class EquipeService {

	@Autowired
	private EquipeRepository equipeRepository;
	
	@Lazy
	@Autowired
	private ProjetoService projetoService;

	public List<Equipe> mostrarTodasEquipes() {
		return equipeRepository.findAll();
	}

	public Equipe buscarUmaEquipe(Integer id_equipe) {
		Optional<Equipe> equipe = equipeRepository.findById(id_equipe);
		return equipe.orElseThrow(() -> new soulCode.empresa.services.exceptions.ObjectNotFoundException("Objeto nao cadastrado: " + id_equipe));
	}
	
	public List<Equipe> equipeSemProjeto(){
		return equipeRepository.equipeSemProjeto();
	}
	
	public Equipe equipeDoProjeto(Integer id_projeto) {
		Equipe equipe = equipeRepository.equipeDoProjeto(id_projeto);
		return equipe;
	}
	

	public List<List> equipeComSeuProjeto(){
		return equipeRepository.equipeComSeuProjeto();
	}

	public Equipe cadastrarEquipe(Integer id_projeto, Equipe equipe) {
		// é uma forma de segurança para não setarmos o id
		equipe.setId_equipe(null);
		if (id_projeto != null) {
			Projeto projeto = projetoService.mostrarUmProjeto(id_projeto);
			equipe.setProjeto(projeto);
			
		}
		
		return equipeRepository.save(equipe);
	}

	public Equipe editarEquipe(Equipe equipe) {
		buscarUmaEquipe(equipe.getId_equipe());
		return equipeRepository.save(equipe);
	}
	
	public void deletarUmEquipe(Integer id_equipe) {
		buscarUmaEquipe(id_equipe);
		try{
			equipeRepository.deleteById(id_equipe);
		}catch(org.springframework.dao.DataIntegrityViolationException e){
			throw new soulCode.empresa.services.exceptions.DataIntegrityViolationException("O equipe possui funcionários relacionados, portanto, não pode ser deletado.");
		}
		
	}
	
	public Equipe atribuirProjeto(Integer id_equipe,Integer id_projeto){
		Equipe equipe = buscarUmaEquipe(id_equipe);
		Projeto projetoAnterior = projetoService.buscarProjetoDaEquipe(id_equipe);
		Projeto projeto = projetoService.mostrarUmProjeto(id_projeto);
		if(equipe.getProjeto()!=null) {
			equipe.setProjeto(null);
			projetoAnterior.setEquipe(null);
		}
		equipe.setProjeto(projeto);
		projeto.setEquipe(equipe);
		return equipeRepository.save(equipe);
	}
	
	public Equipe deixarEquipeSemProjeto(Integer id_equipe, Integer id_projeto) {
		Equipe equipe = buscarUmaEquipe(id_equipe);
		equipe.setProjeto(null);
		Projeto projeto = projetoService.mostrarUmProjeto(id_projeto);
		projeto.setEquipe(null);
		return equipeRepository.save(equipe);
	}

}

//public Equipe cadastrarEquipe(Equipe equipe) {
//	// é uma forma de segurança para não setarmos o id
//	equipe.setId_equipe(null);
//	return equipeRepository.save(equipe);
//}


//public Equipe atribuirProjeto(Integer id_equipe, Integer id_projeto) {
//	Equipe equipe = buscarUmaEquipe(id_equipe);
//	Projeto projeto = projetoService.mostrarUmProjeto(id_projeto);
//	equipe.setProjeto(projeto);
//	projeto.setEquipe(equipe);
//	return equipeRepository.save(equipe);
//}
