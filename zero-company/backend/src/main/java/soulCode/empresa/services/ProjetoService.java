package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.models.Projeto;
import soulCode.empresa.models.Equipe;
import soulCode.empresa.models.Projeto;
import soulCode.empresa.repositories.ProjetoRepository;

import soulCode.empresa.repositories.EquipeRepository;
import soulCode.empresa.services.EquipeService;


@Service
public class ProjetoService {
	
	@Autowired
	private ProjetoRepository projetoRepository;
	
	@Autowired
	private EquipeService equipeService;
	
//	@Autowired
//	private EquipeRepository equipeRepository;
	
	public List<Projeto> mostrarTodosProjetos(){
		return projetoRepository.findAll();
	}
	
	public Projeto mostrarUmProjeto(Integer id_projeto) {
		Optional<Projeto> projeto = projetoRepository.findById(id_projeto);
		return projeto.orElseThrow();
	}
	
	public Projeto buscarProjetoDaEquipe(Integer id_equipe) {
		Projeto projeto = projetoRepository.fetchByEquipe(id_equipe);
		return projeto;
	}
	
	public List<Projeto> projetoSemEquipe(){
		return projetoRepository.projetoSemEquipe();
	}
	
	public List<List> ProjetoComSuaEquipe(){
		return projetoRepository.projetoComSuaEquipe();
	}
	
	public Projeto inserirProjeto(Integer id_equipe, Projeto projeto) {
		projeto.setId_projeto(null);
		if(id_equipe != null) {
			Equipe equipe = equipeService.buscarUmaEquipe(id_equipe);
			projeto.setEquipe(equipe);
			equipe.setProjeto(projeto);
		}
		return projetoRepository.save(projeto);
	}
	
	public Projeto editarProjeto(Projeto projeto) {
		mostrarUmProjeto(projeto.getId_projeto());
		return projetoRepository.save(projeto);
	}
	
	public Projeto editarProjetoSemEquipe(Projeto projeto) {
		mostrarUmProjeto(projeto.getId_projeto());
		return projetoRepository.save(projeto);
	}
	
	public void deletarUmProjeto(Integer id_projeto) {
		projetoRepository.deleteById(id_projeto);
	}
}


//  public Projeto editarProjeto(Integer id_equipe,Projeto projeto) {
//	
//	if(id_equipe != null) {
//		Projeto projAnterior = mostrarUmProjeto(projeto.getId_projeto());
//		Equipe equipeAnterior = projAnterior.getEquipe();
//			if(equipeAnterior != null) {
//				equipeAnterior.setProjeto(null);
//				equipeRepository.save(equipeAnterior);
//			}
//		Equipe equipe = equipeService.buscarUmaEquipe(id_equipe);
//		projeto.setEquipe(equipe);
//		equipe.setProjeto(projeto);
//	}
//	return projetoRepository.save(projeto);
//}