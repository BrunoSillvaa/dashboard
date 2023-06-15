import styled from 'styled-components'

// Layout Styles
export const FirstRow = styled.section`
  display: grid;
  align-items: flex-start;
  width: 100%;
  column-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
`
export const SecondRow = styled.section`
  display: grid;
  align-items: flex-start;
  width: 100%;
  column-gap: 24px;
  grid-template-columns: repeat(5, 1fr);
`
export const ThirdRow = styled.section`
  display: grid;
  align-items: flex-start;
  width: 100%;
  column-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
`

// Content Styles
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
`
export const SimpleCardContainer = styled.article`
  background: #080b27;
  padding: 22px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 8px;
  align-items: center;

  .title {
    color: #a0aec0;
    font-size: 16px;
    font-weight: 700;
    grid-column: 1;
    grid-row: 1;
  }

  .value {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    grid-column: 1;
    grid-row: 2;
  }

  .icon {
    color: #fff;
    background: #582df9;
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
    border-radius: 10px;
    grid-column: 2;
    grid-row: 1 / 3;
    box-sizing: content-box;
  }
`
export const WelcomeCardContainer = styled.article`
  background: url('./jellyfish.png') no-repeat;
  background-position: right;
  background-size: cover;
  background-color: #080b27;
  border-radius: 20px;
  height: 350px;
  grid-column: 1 / 75%;
  display: grid;
  padding: 22px;
  grid-column: 1/3;
  grid-template-rows: repeat(2, auto) 1fr;
  row-gap: 18px;

  .title {
    color: #a0aec0;
    font-size: 16px;
    font-weight: 500;
    grid-column: 1;
    grid-row: 1;

    .name {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
    }
  }

  p {
    color: #a0aec0;
    font-size: 16px;
    font-weight: 500;
    grid-row: 2;
  }

  button {
    grid-row: 3;
    height: fit-content;
    width: fit-content;
    align-self: flex-end;
    background: transparent;
    cursor: pointer;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
`
export const LineChartCardContainer = styled.article`
  background: #ccc;
  height: 350px;
  width: 100%;
  grid-column: 3/6;
  background-color: #080b27;
  border-radius: 20px;
`
export const ColumnChartCardContainer = styled.article`
  background: #ccc;
  height: 340px;
  width: 100%;
  grid-column: 1/3;
  background-color: #080b27;
  border-radius: 20px;
`
export const RevenueCardContainer = styled.article`
  background: #080B27;
  width: 100%;
  height: 340px;
  padding: 22px;
  border-radius: 20px;
  grid-column: 3 / 5;

  .title {
    color: #a0aec0;
    font-size: 18px;
    font-weight: 700;
  }

  .table-container {
    height: 280px;
    overflow-y: scroll;

    &.table-container::-webkit-scrollbar {
      width: 15px;
    }

    &.table-container::-webkit-scrollbar-track {
      background-color: rgb(255 255 255 / 10%);
      border-radius: 12px;
      border: 3px solid #080B27;
    }

    &.table-container::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #00aeff, #582CFF);
      border-radius: 12px;
      transition: all ease .2s;

      &:hover {
        background: linear-gradient(45deg, #00aeffe3, #582CFFe3);
      }
    }


    .table {
      width: 98%;
      border-collapse: collapse;

      .header {
        th {
          color: #CCC;
          padding: 10px;
          text-align: start;
        }
      }

      .content {
        td {
          color: #FFF;
          padding: 10px;
          border-bottom: 2px solid rgba(255, 255, 255, 30%);
          border-radius: 12px;

          &:nth-child(3) {
            font-family: 'Space Mono', monospace;
          }

          .edit-icon {
            font-size: 18px;
            cursor: pointer;
          }
          
          .trash-icon {
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }
`
