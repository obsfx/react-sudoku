import 'typeface-inter'
import 'normalize.css'
import styled, { createGlobalStyle } from 'styled-components'
import { NavLink, Link as RouterLink } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 574px) {
      font-size: 11px;
    }
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
  max-width: 900px;
  padding: 2vh 1rem;
  margin: auto;
  position: relative;
`

export const ContentTitle = styled.div`
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  background-color: #f0f0f0;
  display: inline-flex;
  border-radius: 0.4rem;
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
  text-align: center;

  &:not(:last-child) {
    margin-right: 0.2rem;
  }

  &:hover {
    color: #000000;
  }
`

export const DeckWrapper = styled.div`
  display: inline-flex;
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
  width: string
  height: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  padding-top: 2rem;
  position: relative;
`

export const DeckBlurred = styled.div`
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DeckSelectSudokuButton = styled(RouterLink)`
  margin-top: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 500;
  padding: 0.6rem 0rem;
  width: 100%;
  border-radius: 0.2rem;
  background-color: #e3e3e3;
  text-align: center;
  color: #222222;
  text-decoration: none;
  max-width: 300px;

  &:hover {
    background-color: #cecece;
  }
`

export const SudokuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1.6rem;
`

export const SudokuOptionWrapper = styled.div`
  border-radius: 0.4rem;
  width: 33%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 770px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const SudokuPreviewWrapper = styled.div`
  background-color: #eeeeee;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SudokuStartButton = styled(DeckSelectSudokuButton)``

export const Card = styled.div`
  padding: 1.4rem 1.8rem;
  background-color: #dfffbf;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 350px;
  margin: auto;
`

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
`

export const CardValue = styled.div`
  padding-top: 0.6rem;
  font-weight: bold;
  font-size: 2rem;
`
