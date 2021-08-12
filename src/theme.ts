import 'typeface-inter'
import 'normalize.css'
import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: #f4f4f4;
    font-family: Inter, 'sans-serif';
  }

  input {
    background: none;
    border: none;
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 1rem;
  margin: auto;
`

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #dedede;

  .navbar-link-active {
    color: #000000;
    background-color: #e3e3e3;
    border-radius: 0.2rem;
  }
`

export const Link = styled(NavLink)`
  color: #656565;
  padding: 0.6rem 2rem;
  text-decoration: none;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 0.2rem;
  }

  &:hover {
    color: #000000;
  }
`

export const DeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #d4d4d4;
  border-radius: 0.4rem;
  overflow: hidden;
`

export const DeckRow = styled.div`
  display: flex;
`

export const DeckCell = styled.div<{
  borderRight?: boolean
  borderBottom?: boolean
}>`
  ${({ borderRight }) => (borderRight ? `border-right: 2px solid #000000;` : ``)}
  ${({ borderBottom }) => (borderBottom ? `border-bottom: 2px solid #000000;` : ``)}
`

export const DeckInput = styled.input<{
  borderRight?: boolean
  borderBottom?: boolean
  predefined?: boolean
  readOnly?: boolean
}>`
  width: 3rem;
  height: 3rem;
  color: #222222;
  ${({ borderRight }) => (borderRight ? `border-right: 1px solid #d4d4d4;` : ``)}
  ${({ borderBottom }) => (borderBottom ? `border-bottom: 1px solid #d4d4d4;` : ``)}
  background-color: ${({ predefined }) => (!predefined ? `#f4f4f4` : `#e5e5e5`)};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  ${({ predefined, readOnly }) =>
    !predefined && !readOnly
      ? `
      &:focus {
        color: #f4f4f4;
        font-weight: bold;
        border-color: #000000;
        background-color: #000000;
      }`
      : ``}
`

export const DeckContainer = styled.div`
  display: flex;
  justify-content: center;
`
