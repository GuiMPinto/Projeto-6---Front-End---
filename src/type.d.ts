declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Prato[]
}

declare interface Prato {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}
