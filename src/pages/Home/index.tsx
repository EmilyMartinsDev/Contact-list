import { Main, Aside, Campo, ButtonBall } from './styles'

import ListaContato from '../../components/organisms/ListaContato'
import { useDispatch } from 'react-redux'
import { pesquisa } from '../../store/filtro'
const Home = () => {
  const dispacth = useDispatch()
  return (
    <Main>
      <Aside>
        <Campo
          onChange={(e) => dispacth(pesquisa(e.target.value))}
          type="text"
          placeholder="pesquisar contato"
        />
        <ButtonBall to={'/cadastrar'}>+</ButtonBall>
      </Aside>
      <ListaContato />
    </Main>
  )
}
export default Home
