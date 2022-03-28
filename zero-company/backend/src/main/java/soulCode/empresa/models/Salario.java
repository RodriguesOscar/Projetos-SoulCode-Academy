package soulCode.empresa.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Salario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(nullable = false)
	private String sl_descricao;
	
	@DateTimeFormat(pattern="dd-MM-yyyy")
	//@Temporal(TemporalType.DATE) //sem salvar a hora, só o dia
	@Column(columnDefinition = "date", nullable = false)
	private Date sl_dataPagamento;
	
	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private Double sl_valor;
	
	@Enumerated(EnumType.STRING)
	private StatusTitulo sl_status;
	
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "id_funcionario")
	private Funcionario funcionario;
	
	public Integer getCodigo() {
		return codigo;
	}
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	public String getSl_descricao() {
		return sl_descricao;
	}
	public void setSl_descricao(String sl_descricao) {
		this.sl_descricao = sl_descricao;
	}
	public Date getSl_dataPagamento() {
		return sl_dataPagamento;
	}
	public void setSl_dataPagamento(Date sl_dataPagamento) {
		this.sl_dataPagamento = sl_dataPagamento;
	}
	public Double getSl_valor() {
		return sl_valor;
	}
	public void setSl_valor(Double sl_valor) {
		this.sl_valor = sl_valor;
	}
	public StatusTitulo getSl_status() {
		return sl_status;
	}
	public void setSl_status(StatusTitulo sl_status) {
		this.sl_status = sl_status;
	}
	public Funcionario getFuncionario() {
		return funcionario;
	}
	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
}
