package soulCode.empresa.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Funcionario{


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_funcionario;

	@Column(nullable = false, length = 60)
	private String func_nome;

	@Column(nullable = true, length = 60)
	private String func_cargo;

	@Column(nullable = false, length = 30)
	private String func_cidade;
	
	@Column(nullable=true)
	private String func_foto;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_equipe")
	private Equipe equipe;
	
	//@JsonIgnore
	//@OneToMany(mappedBy = "boleto")
	//private List<Boleto> boleto = new ArrayList<>();

	public Integer getId_funcionario() {
		return id_funcionario;
	}
	
	public void setId_funcionario(Integer id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getFunc_nome() {
		return func_nome;
	}

	public void setFunc_nome(String func_nome) {
		this.func_nome = func_nome;
	}

	public String getFunc_cargo() {
		return func_cargo;
	}

	public void setFunc_cargo(String func_cargo) {
		this.func_cargo = func_cargo;
	}

	public String getFunc_cidade() {
		return func_cidade;
	}

	public void setFunc_cidade(String func_cidade) {
		this.func_cidade = func_cidade;
	}
	
	public String getFunc_foto() {
		return func_foto;
	}

	public void setFunc_foto(String func_foto) {
		this.func_foto = func_foto;
	}

	public Equipe getEquipe() {
		return equipe;
	}

	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
}