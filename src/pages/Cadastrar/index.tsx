import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/contato'
import { useNavigate } from 'react-router-dom'
import {
  DatailContainer,
  DatailMain,
  Form,
  Campo,
  ButtonSalvar
} from './styles'
const Cadastrar = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const dispacth = useDispatch()
  const navigate = useNavigate()

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    if (!nome || !email || !tel) {
      return
    }
    dispacth(
      cadastrar({
        name: nome,
        email: email,
        tel: tel
      })
    )
    navigate('/')
  }

  return (
    <DatailMain>
      <DatailContainer>
        <div>
          <img
            width="90"
            src="https://img.icons8.com/ios-glyphs/90/000000/user--v1.png"
            alt="user--v1"
          />
        </div>

        <Form onSubmit={cadastrarContato} action="">
          <Campo
            onChange={(e) => setNome(e.target.value)}
            placeholder="nome"
            type="text"
          />
          <Campo
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="text"
          />
          <Campo
            onChange={(e) => setTel(e.target.value)}
            placeholder="telefone"
            type="text"
          />
          <ButtonSalvar type="submit">Cadastrar</ButtonSalvar>
        </Form>
      </DatailContainer>
    </DatailMain>
  )
}
export default Cadastrar
