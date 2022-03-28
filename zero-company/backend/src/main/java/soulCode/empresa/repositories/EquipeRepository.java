package soulCode.empresa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.models.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe,Integer>{
	
	@Query(value="SELECT * FROM equipe WHERE id_projeto is null", nativeQuery = true)
	List<Equipe> equipeSemProjeto();
	
	@Query(value="SELECT * FROM equipe where id_projeto =:id_projeto",nativeQuery = true)
	Equipe equipeDoProjeto(Integer id_projeto);
	
	@Query(value="SELECT equipe.id_equipe,equipe.eqp_nome,equipe.eqp_atribuicao,projeto.id_projeto,projeto.pro_nome,projeto.pro_descricao FROM equipe left JOIN projeto ON projeto.id_equipe = equipe.id_equipe order by equipe.eqp_nome;",nativeQuery = true)
	List<List> equipeComSeuProjeto();
}