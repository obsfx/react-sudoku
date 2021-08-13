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
  conflict?: boolean
  width: string
  height: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: #222222;
  ${({ borderRight }) => (borderRight ? `border-right: 1px solid #d4d4d4;` : ``)}
  ${({ borderBottom }) => (borderBottom ? `border-bottom: 1px solid #d4d4d4;` : ``)}
  background-color: ${({ conflict, predefined }) =>
    conflict ? `#ff9a9a` : !predefined ? `#f4f4f4` : `#e5e5e5`};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  ${({ conflict }) => (conflict ? `border-color: #ff9a9a;` : '')}

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
  backdrop-filter: saturate(80%) blur(3px);
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

export const SudokuButtonWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

export const SudokuButton = styled.button`
  background: none;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 500;
  padding: 0.6rem 0rem;
  width: 100%;
  border-radius: 0.2rem;
  background-color: #e3e3e3;
  text-align: center;
  color: #222222;
  text-decoration: none;
  width: 49%;

  &:disabled {
    background-color: #f5efef;
    color: #a5a5a5;
  }

  &:hover {
    background-color: #cecece;
  }
`

export const Card = styled.div`
  padding: 1rem 1.4rem;
  background-color: #dfffbf;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 350px;
  margin: auto;
`

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
`

export const CardValue = styled.div`
  padding-top: 0.2rem;
  font-weight: bold;
  font-size: 1.6rem;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: saturate(180%) blur(4px);
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ModalBody = styled.div`
  padding: 1.6rem;
  width: 100%;
  max-width: 560px;
  display: flex;
`

export const ModalContent = styled.div<{
  success?: boolean
  fail?: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.2rem 1.4rem;
  font-size: 1rem;
  color: ${({ success, fail }) => (success ? '#0c4114' : fail ? '#961e1e' : '#222222')};
  background-color: ${({ success, fail }) => (success ? '#d1ffd9' : fail ? '#ffd6d6' : '#e2e2e2')};
  border-radius: 0.4rem;
  box-shadow: 0px 0px 14px -4px #e4e4e4;
  text-align: center;
  justify-content: center;
  align-items: center;

  ${SudokuButton} {
    color: ${({ success, fail }) => (success ? '#0c4114' : fail ? '#961e1e' : '#222222')};
    background-color: ${({ success, fail }) =>
      success ? '#d1ffd9' : fail ? '#ffd6d6' : '#e2e2e2'};
    border: 1px solid;
    border-color: ${({ success, fail }) => (success ? '#0c4114' : fail ? '#961e1e' : '#222222')};
    font-size: 1rem;
    margin-top: 2rem;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`

export const HistoryContainer = styled.div``
