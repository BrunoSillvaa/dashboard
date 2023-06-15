import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body {
    background: #130D25;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;
`