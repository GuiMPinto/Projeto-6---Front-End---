import { Prato } from '../models/restaurante'

export const getValorTotal = (items: Prato[]) => {
  return items.reduce((acumulador, item) => {
    if (item.preco) {
      return (acumulador += item.preco)
    }
    return 0
  }, 0)
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
