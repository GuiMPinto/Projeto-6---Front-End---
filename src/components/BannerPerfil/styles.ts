import styled from 'styled-components'
import { cores } from '../../styles'
// importa um elemento STYLED COMPONENT do componente TAG

/*  display: block; // Evita o comportamento padrão 'inline'
                    // da imagem background-size: cover;

    background-repeat: no-repeat; // Evita o comportamento
                    // da imagem se repetir até completar
                    // a tela toda disponível

    background-size: cover; // Faz com que a imagem ocupe a
                    // imagem ocupa a largura total da tela

    ${TagContainer} // ${elemento JSX}
*/
export const Imagem = styled.div`
  width: 100%;
  height: 320px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    color: ${cores.branca};
    font-size: 32px;
    z-index: 1;

    h3 {
      color: ${cores.branca};
      font-size: 32px;
      font-weight: normal;
      position: absolute;
      top: 24px;
    }
  }
`
export const Titulo = styled.h2`
  color: ${cores.branca}
  font-size: 4px;
  position: absolute;
  bottom: 48px;
`
