import styled from 'styled-components'

export const Container = styled.aside`
  background: #080b27;
  width: 260px;
  height: 100%;
  border-radius: 16px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 240px;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px;

    &.open {
      display: flex;
      animation: slide-out-right 0.5s ease;
    }

    @keyframes slide-out-left {
      0% {
        transform: translateX(0px);
        opacity: 1;
      }
      100% {
        transform: translateX(-240px);
        opacity: 0;
      }
    }

    @keyframes slide-out-right {
      0% {
        transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  h2 {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  .box {
    background-image: url('https://demos.creative-tim.com/vision-ui-dashboard-chakra/static/media/SidebarHelpImage.40ef5912.png');
    background-position: 50% 50%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 170px;
    padding: 16px;
    gap: 12px;

    p {
      color: #fff;
      font-size: 13px;
      font-weight: 600;
    }

    button {
      border-radius: 12px;
      border: none;
      background: linear-gradient(
        126.97deg,
        rgba(6, 11, 40, 0.74) 28.26%,
        rgba(10, 14, 35, 0.71) 91.2%
      );
      padding: 16px;
      transition: all ease 0.2s;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
      }

      &:active {
        scale: 90%;
      }
    }
  }
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
    background: #1a1f37;

    & > .item-icon {
      color: #fff;
      background: #582df9;
    }
  }

  .item-icon {
    color: #582df9;
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
    border-radius: 12px;
    box-sizing: content-box;
    transition: all ease 0.4s;
    background: #1a2036;
  }

  .item-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }
`
