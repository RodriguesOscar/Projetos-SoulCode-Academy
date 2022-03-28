package soulCode.empresa.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Equipe {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_equipe;
	
	@Column(nullable=false, length=10)
	private String eqp_nome;
	
	@Column(nullable=false, length=20)
	private String eqp_atribuicao;
	
	@JsonIgnore
	@OneToMany(mappedBy = "equipe")
	private List<Funcionario> funcionario = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "id_projeto", unique = true)
	private Projeto projeto;
	
	public Integer getId_equipe() {
		return id_equipe;
	}

	public void setId_equipe(Integer id_equipe) {
		this.id_equipe = id_equipe;
	}

	public String getEqp_nome() {
		return eqp_nome;
	}

	public void setEqp_nome(String eqp_nome) {
		this.eqp_nome = eqp_nome;
	}

	public String getEqp_atribuicao() {
		return eqp_atribuicao;
	}

	public void setEqp_atribuicao(String eqp_atribuicao) {
		this.eqp_atribuicao = eqp_atribuicao;
	}

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}
	
}




