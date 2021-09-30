import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      /* max-width: 768px; */
    `,
    lg: css`
      /* max-width: 1160px;  */
    `,
    xl: css`
      /* max-width: 1222px; */
    `,
  })}
`;

MenuWrapper.Logo = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
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
  margin-top: 17px;
  padding: 20px 12px;
  padding-bottom: 20px;
  width: 100%;
  position: fixed;
  bottom:0;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  border-radius: 24px 24px 0 0;

  .searchDiv{
    display:none;
  }

  .searchInput{
    background: url('/images/search.png') 10px 12px / 10% no-repeat;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    padding: 12px 20%;
  }

  .searchInput:focus{
    background: none;
    padding: 12px 16px;
    transition: ${({ theme }) => theme.transition};
  }

  .addPicButton{
    order:3;
    transform: scale(2);
  }

  a, button{
    width:20px;
    padding:0;
  }

  img{
    width:100%;
  }

  .userPic{
    border-radius: 50%;
  }
  
  ${breakpointsMedia({
    md: css`
      width:50%;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      position:static;
      background-color: transparent;

    .searchDiv{
      display:flex;
  }

  .addPicButton{
    order:initial;
    transform: none;
  }

  .searchIcon{
    display:none;
  }

  a, button{
    width:35px;
  }
    `,
  })}
`;

export { MenuWrapper as default };
