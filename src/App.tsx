import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import EstiloGlobal from './styles'
import Cadastrar from './pages/Cadastrar'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cadastrar',
      element: <Cadastrar />
    }
  ])
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <RouterProvider router={routes} />
      </Provider>
    </div>
  )
}

export default App
