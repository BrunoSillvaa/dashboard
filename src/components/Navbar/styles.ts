import styled from 'styled-components'

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
      color: #FFF;
      display: flex;
      align-items: center;
      border-radius: 16px;
      border: 2px solid #e2e8f0;
      padding: 10px;
      gap: 12px;

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
