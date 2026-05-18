/*
  O React Router Dom é uma biblioteca usada em aplicações React
  para gerenciar a navegação entre diferentes páginas ou componentes,
  sem precisar recarregar a página inteira. Ele permite criar rotas,
  ou seja, definir qual componente deve ser exibido para cada URL da
  aplicação, criando uma experiência similar à de páginas tradicionais,
  mas dentro do conceito de Single Page Application (SPA).

  Por exemplo, com o React Router Dom você pode ter um componente
  diferente para a rota "/home" e outro para a rota "/sobre", controlando
  a navegação de forma eficiente:

  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Home from './Home';
  import Sobre from './Sobre';
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    );
  }

  Assim, o React Router Dom é essencial para criar aplicações React com
  múltiplas "páginas" e rotas personalizadas, trazendo mais organização e
  fluidez para o seu projeto.
*/
// React e Redux
import { BrowserRouter } from 'react-router-dom'
import { store } from './store' // Necessário, na aplicação pois será
// disparado uma action ao clicar em um botão

import { GlobalCss } from './styles'

// Componentes
import Footer from './components/Rodape'
import Rotas from './routes'
import Cart from './components/Cart'

//React
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      {/* O primeiro store é uma propriedade do Provider
    O segundo store é a constante criado em src/store/index.tsx */}
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
