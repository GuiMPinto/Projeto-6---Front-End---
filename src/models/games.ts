// Classe usada para preencher no componente ProductList
// que este preenche o componente Product

class Game {
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    descricao: string,
    imagemDoJogo: string,
    informacao: string[],
    nomePrato: string // titulo: string
  ) {
    this.id = id
    this.description = descricao
    this.image = imagemDoJogo
    this.infos = informacao
    this.title = nomePrato // this.title = titulo
  }
}

export default Game
