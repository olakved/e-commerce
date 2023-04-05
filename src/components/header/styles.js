import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;

  .headerwrap {
    max-width: 1240px;
    padding: 30px 30px;
    overflow: hidden;
  }

  .logo a {
    color: white;
    font-size: 30px;
    font-weight: 400;
    margin: auto 0px;
  }

  .headerLogo {
    width: auto;
    height: 50px;
    border-radius: 100%;
    margin-left: 60px;
  }

  .headerBox {
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
  }

  .navMenu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 50px;
  }

  .navLink {
    color: white;
    /* margin-right:50px; */
  }

  .navMenuBtn {
    padding: 8px;
    width: 80px;
    border: none;
    border-radius: 8px;
    background-color: #1a7b42;
    font-size: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .navMenuBtn a {
    color: white;
  }

  .hamburger {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  .hamburger2 {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  @media screen and (min-width: 1025px) {
  }

  @media screen and (max-width: 960px) {
    .headerBox {
      padding: 20px 45px;
    }
  }

  @media screen and (max-width: 660px) {
    .headerLogo {
      margin-left: 2px;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 550px) {
    .headerBox {
      margin-top: 15px;
      padding: 20px 40px;
    }

    .headerLogo {
      display: none;
    }

    .headerwrap {
      margin-top: 20px;
    }
    .navMenu {
      gap: 10px;
    }
  }

  @media screen and (max-width: 350px) {
    .headerBox {
      padding: 20px 12px;
    }

    .navMenuBtn {
      padding: 5px;
      width: 48px;
      font-size: 12px;
    }
    .navLink {
      font-size: 12px;
    }
  }
`;
