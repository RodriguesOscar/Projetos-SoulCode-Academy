package soulCode.empresa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.models.Funcionario;
import soulCode.empresa.models.Projeto;


public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer>{
	
	@Query(value = "SELECT * FROM funcionario WHERE id_equipe = :id_equipe", nativeQuery = true)
	List<Funcionario> fetchByEquipe(Integer id_equipe);
	
	@Query(value = "SELECT id_funcionario, func_nome, func_cargo, equipe.id_equipe, eqp_nome, eqp_atribuicao FROM equipe right JOIN funcionario ON funcionario.id_equipe = equipe.id_equipe order by func_nome", nativeQuery = true)
	List<List> funcionariosComEquipe();
	
	@Query(value = "SELECT * FROM funcionario WHERE func_nome = :func_nome", nativeQuery = true)
	Funcionario fetchByName(String func_nome);
}
