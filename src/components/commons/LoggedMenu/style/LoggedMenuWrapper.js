import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 28px;
  z-index: 10;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      /* margin-top: 32px; */
      margin-left: auto;
      margin-right: auto;
      padding: 18px 28px;
    `,

  })}
`;

MenuWrapper.Logo = styled.div`
  left: 50%;
  margin: 0 0 0 -50px;
  order: 1;
  padding: 0;
  position:relative;
  width:100px;

  ${breakpointsMedia({
    md: css`
        position:initial;
        margin:0;
        left:0;
        width: 131px;
        height: 32px;
      `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.Menu = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 12px;
  width: 100%;
  position: fixed;
  bottom:0;
  left:0;
  margin-top: 17px;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  border-radius: 24px 24px 0 0;

  .searchDiv{
    display:none;
  }

  .searchInput{
    background: url('/images/search.png') 5px 7px / 6% no-repeat;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    padding: 7px 20%;
    width:250px;
  }

  .searchInput:focus{
    background: none;
    padding: 7px 16px;
    transition: ${({ theme }) => theme.transition};
  }

  .addPicButton{
    order:3;
    transform: scale(2);
  }

  a, button{
    width:30px;
    padding:0;
  }

  img{
    width:30px;
  }

  .userPic{
    border-radius: 50%;
  }

  .header__userButton{
    position:relative;
    /* display:inline-block; */
  }

  .header__userButton_modal{
    display: none;
    flex-direction:column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    transition: ${({ theme }) => theme.transition};
    background-color: ${({ theme }) => theme.colors.background.main.color};
  }

  .header__userButton:hover .header__userButton_modal{
    display:flex;

  }
  
  ${breakpointsMedia({
    md: css`
      width:50%;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      position:static;
      background-color: transparent;
      justify-content: space-between;

    .searchDiv{
      display:block;
      width:auto;
  }

  .addPicButton{
    order:initial;
    transform: none;
  }

  .searchIcon{
    display:none;
  }

  a, button{
    width:30px;
  }
    `,
  })}
`;

export { MenuWrapper as default };
