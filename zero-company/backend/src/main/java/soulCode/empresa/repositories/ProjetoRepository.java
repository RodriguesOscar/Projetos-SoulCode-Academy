package soulCode.empresa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.models.Projeto;



public interface ProjetoRepository extends JpaRepository<Projeto, Integer> {
	
	@Query(value = "SELECT * FROM projeto WHERE id_equipe = :id_equipe", nativeQuery = true)
	Projeto fetchByEquipe(Integer id_equipe);
	
	
	@Query(value="SELECT * FROM projeto WHERE id_equipe is null", nativeQuery = true)
	List<Projeto> projetoSemEquipe();
	
	@Query(value = "SELECT projeto.id_projeto,projeto.pro_nome,projeto.pro_descricao,equipe.id_equipe,equipe.eqp_nome,equipe.eqp_atribuicao FROM equipe right JOIN projeto ON projeto.id_equipe = equipe.id_equipe order by projeto.pro_nome;",nativeQuery = true)
	List<List> projetoComSuaEquipe();
	
}
