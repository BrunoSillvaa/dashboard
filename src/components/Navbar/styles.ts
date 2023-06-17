import styled from 'styled-components'

interface HamburguerProps {
  sidebar: boolean
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  grid-column: 1/5;

  h2 {
    color: #a0aec0;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;

    span {
      color: #fff;
      font-weight: 500;
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 14px;

    .search-wrapper {
      color: #fff;
      display: flex;
      align-items: center;
      border-radius: 16px;
      border: 2px solid #e2e8f0;
      padding: 10px;
      gap: 12px;

      @media (max-width: 700px) {
        display: none;
      }

      .icon {
        font-size: 18px;
      }

      input {
        background: transparent;
        border: none;
        font-size: 14px;
        font-weight: 600;
        outline: none;
        color: #a0aec0;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
    }
  }
`
export const Hamburguer = styled.div<HamburguerProps>`
  display: none;
  height: 16px;
  width: 24px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 700px) {
    display: flex;
  }

  .line {
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #fff;

    &.line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.sidebar ? 'rotate(45deg)' : '')};
    }

    &.line2 {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.sidebar ? 'scaleY(0)' : '')};
    }

    &.line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.sidebar ? 'rotate(-45deg)' : '')};
    }
  }
`
