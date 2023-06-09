import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 1024px) {
    display: block;
  }
`
export const Campo = styled.input`
  padding: 16px;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  width: 80%;
  border: 3px solid #d9d9d9;
`

export const Aside = styled.aside`
  justify-content: center;
  background-color: #38b6ff;
  height: 100vh;
  padding: 16px;
  @media (max-width: 1024px) {
    height: 50%;
  }
`

export const ButtonBall = styled(Link)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #38b6ff;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  @media (max-width: 768px) {
    bottom: 10%;
  }
`
