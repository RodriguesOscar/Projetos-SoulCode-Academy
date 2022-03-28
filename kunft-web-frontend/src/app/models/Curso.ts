export class Curso{
  id?: string
  nome: string
  tema: string
  descricao: String
  preco: Number
  foto: string
  dataCriacao: Date
  dataAtualizacao: Date

  constructor(){
   this.id = ""
   this.nome = ""
   this.tema = ""
   this.descricao = ""
   this.preco = 0
   this.foto = ""
   this.dataCriacao = new Date()
   this.dataAtualizacao = new Date()
  }

}
