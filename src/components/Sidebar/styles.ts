import styled from 'styled-components'

export const Container = styled.aside`
  background: #080b27;
  width: 260px;
  height: 100%;
  border-radius: 16px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const SidebarItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 16px;
  padding: 12px 16px;
  gap: 12px;
  transition: all ease 0.4s;
  cursor: pointer;

  &.active {
    background: #1A1F37;

    & > .item-icon {
      color: #FFF;
      background: #582df9;
    }
  }

  .item-icon {
    color: #582df9;
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
    border-radius: 10px;
    box-sizing: content-box;
    transition: all ease 0.4s;
  }

  .item-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }
`
