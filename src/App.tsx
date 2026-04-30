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
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

import { GlobalCss } from './styles'

// Componentes
import Header from './components/Header'
import Footer from './components/Rodape'

import Rotas from './routes'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
