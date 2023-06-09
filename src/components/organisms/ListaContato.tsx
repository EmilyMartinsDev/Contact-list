import { useSelector } from 'react-redux'
import { Content } from './styles'
import { RootRedux } from '../../store'
import Contato from '../molecules/Contato'

const ListaContato = () => {
  const { items } = useSelector((state: RootRedux) => state.contato)
  const pesquisa = useSelector((state: RootRedux) => state.filtro.pesquisa)

  function pesquisaContatos() {
    let filtrados = items
    if (pesquisa !== undefined) {
      filtrados = filtrados.filter(
        (c) => c.name.toLowerCase().search(pesquisa.toLowerCase() || '') >= 0
      )
      return filtrados
    } else {
      return items
    }
  }
  const contatos = pesquisaContatos()
  return (
    <>
      <Content>
        {contatos.map((c) => (
          <Contato
            key={c.id}
            email={c.email}
            name={c.name}
            tel={c.tel}
            id={c.id}
          />
        ))}
      </Content>
    </>
  )
}
export default ListaContato
