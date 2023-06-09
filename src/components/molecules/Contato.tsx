import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/contato'
import { Card, CampoData, ButtonEdit, Label, ButtonRemove } from './styles'

type Props = {
  name: string
  email: string
  tel: string
  id: number
}

const Contato = ({
  name,
  email: emailOriginal,
  tel: telOriginal,
  id
}: Props) => {
  const [nome, setNome] = useState(name)
  const [email, setEmail] = useState(emailOriginal)
  const [tel, setTel] = useState(telOriginal)
  const [edit, setEdit] = useState(false)
  const dispacth = useDispatch()

  function editaContato() {
    dispacth(
      editar({
        email: email,
        name: nome,
        tel: tel,
        id: id
      })
    )
    setEdit(false)
  }

  function removeContato() {
    dispacth(remover(id))
  }

  return (
    <>
      <Card key={id}>
        <img
          width="30"
          src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
          alt="user--v1"
        />
        <div>
          <Label htmlFor={nome}>
            Nome:
            <CampoData
              onChange={(e) => setNome(e.target.value)}
              disabled={!edit}
              value={nome}
              id={nome}
            />
          </Label>
          <Label htmlFor={email}>
            Email:
            <CampoData
              onChange={(e) => setEmail(e.target.value)}
              disabled={!edit}
              value={email}
              id={email}
            />
          </Label>
          <Label htmlFor={tel}>
            Telefone:
            <CampoData
              onChange={(e) => setTel(e.target.value)}
              disabled={!edit}
              value={tel}
              id={tel}
            />
          </Label>
        </div>
        <span>
          {!edit ? (
            <ButtonEdit onClick={() => setEdit(true)}>Editar</ButtonEdit>
          ) : (
            <ButtonEdit onClick={editaContato}>Salvar</ButtonEdit>
          )}
          <ButtonRemove onClick={removeContato}>Remover</ButtonRemove>
        </span>
      </Card>
    </>
  )
}
export default Contato
