import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  verde: '#10AC84',
  rosa: '#E66767'
}
/*
  margin: 0 auto; // Altura vertical igual a Zero
                  // e centralize o conteúdo no centro.
*/

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }
`
