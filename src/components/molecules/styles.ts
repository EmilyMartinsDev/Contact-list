import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  max-width: 560px;
  padding: 8px;
  border: 2px solid #d9d9d9;
  @media (max-width: 768px) {
    display: block;
  }
  img {
    display: inline-block;
    background-color: #ffab07;
    padding: 2px;
    border-radius: 4px;
    margin: auto 0;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
export const Label = styled.label`
  display: block;
  padding: 8px;
`
export const CampoData = styled.input`
  margin: 0 auto;
  padding: 8px;
  display: block;
`

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 0;
  margin: 16px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #fff;
`

export const ButtonEdit = styled(Button)`
  background-color: #ffab07;
  margin-right: 8px;
`
export const ButtonRemove = styled(Button)`
  background-color: #ff3131;
`
