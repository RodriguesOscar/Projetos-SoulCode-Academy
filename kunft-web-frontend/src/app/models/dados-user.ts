export class DadosUser{
  id?: string
  nome: string
  email: string
  categoria: String
  conteudo: String
  dataCriacao: Date
  dataAtualizacao: Date

  constructor(){
   this.id = ""
   this.nome = ""
   this.email = ""
   this.categoria = ""
   this.conteudo = ""
   this.dataCriacao = new Date()
   this.dataAtualizacao = new Date()
  }

}
