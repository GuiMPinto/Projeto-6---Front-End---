// Classe usada para preencher no componente ProductList
// que este preenche o componente Product

class PratosPerfil {
  description: string
  image: string
  title: string
  id?: number

  constructor(
    id: number,
    descricao: string,
    imagemDoJogo: string,
    nomePrato: string // titulo: string
  ) {
    this.id = id
    this.description = descricao
    this.image = imagemDoJogo
    this.title = nomePrato // this.title = titulo
  }
}

export default PratosPerfil

// restaurante.ts

// export type Restaurante = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: string
//   descricao: string
//   capa: string
//   cardapio: Prato[]
// }

// export interface Prato {
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
//   foto: string
//   preco: number
// }
