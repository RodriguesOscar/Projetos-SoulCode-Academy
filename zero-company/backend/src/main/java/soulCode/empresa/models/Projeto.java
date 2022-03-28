package soulCode.empresa.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Projeto {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_projeto;
	
	@Column(nullable=false, length=40)
	private String pro_nome;
	
	@Column(nullable=true, length=40)
	private String pro_descricao;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "id_equipe", unique = true)
	private Equipe equipe;

	public Integer getId_projeto() {
		return id_projeto;
	}

	public void setId_projeto(Integer id_projeto) {
		this.id_projeto = id_projeto;
	}

	public String getPro_nome() {
		return pro_nome;
	}

	public void setPro_nome(String pro_nome) {
		this.pro_nome = pro_nome;
	}

	public String getPro_descricao() {
		return pro_descricao;
	}

	public void setPro_descricao(String pro_descricao) {
		this.pro_descricao = pro_descricao;
	}

	public Equipe getEquipe() {
		return equipe;
	}

	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
}
