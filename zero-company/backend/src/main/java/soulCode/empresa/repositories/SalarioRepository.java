package soulCode.empresa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.models.Salario;

public interface SalarioRepository extends JpaRepository<Salario,Integer>{

	@Query(value = "SELECT * FROM db_empresa.salario where id_funcionario= :id_funcionario", nativeQuery = true)
	List<Salario> buscarSalariosDoFuncionario(Integer id_funcionario);
}
