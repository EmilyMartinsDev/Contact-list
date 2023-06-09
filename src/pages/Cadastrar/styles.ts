import styled from 'styled-components'

export const DatailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  padding: 0 40px;
  margin-right: 16px;
  max-width: 960px;
  @media (max-width: 768px) {
    display: block;
    max-width: 80%;
    margin: 0;
  }
  img {
    display: block;

    background-color: #fff;
    padding: 20px;
    border-radius: 32px;
    margin-bottom: 32px;
    @media (max-width: 768px) {
      width: 30%;
      margin: 16px auto;
    }
  }
`
export const DatailMain = styled.main`
  background-color: #38b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 48px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
`
export const Campo = styled.input`
  padding: 16px;
  display: block;
  margin: 0 auto;
  border: 1px solid #d9d9d9;
  width: 80%;
  margin-bottom: 16px;
`
export const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: 0;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
`
export const ButtonSalvar = styled(Button)`
  background-color: #ffab07;
  width: 80%;
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
`
export const ButtonCancelar = styled(Button)`
  background-color: #ff3131;
`
