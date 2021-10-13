import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const FeedWrapper = styled.main`

.button{
  padding:0;
  display:flex;
  align-items:center;
  width:20px;
}

.button img{
  width:20px;
}

.posts{
  width:100%;
  margin:0;
}

.posts__post{
    list-style: none;
    width:100%;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-bottom: 50px;
}

.posts__post-header{
  display: flex;
  justify-content: space-between;
  width:100%;
  /* align-items: center; */
  padding:25px;
}

.posts__post-header h2{
  font-weight: 600;
  font-size: 14px;
}

.posts__post-header__pic{
  width: 40px;
  height:40px;
  border-radius: 50%;
}

.posts__post-body{
  width:100%;
  display: flex;
  justify-content: center;
}

.posts__post-body img{
  width:100%;

}

.posts__post-footer{
  display: flex;
  flex-direction: column;
  padding:25px;
  width:100%;
}

.posts__post-footer__feedback-section{
  display:flex;
  justify-content: space-between;
  width: 40%;
}

.posts__post-footer__feedback-section span{
  font-weight: 500;
  font-size: 14px;
}

.profiles{
  display:flex;
  flex-direction: column;
  width:100%;
  padding: 0 0 0 30px;
}

.profiles ul{
  width:100%;
}

.profiles__card{
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  margin: 0 0 20px 0;
}

.profiles__card__pic{
  border-radius:50%;
  width: 65px;
}

.profiles__card__pic--friends{
  border-radius:50%;
  width: 50px;
}

.profiles__card__usernames{
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 15px;
}

.profiles__card__link{
  text-decoration:none;
  display:flex;
  align-items:center;
  transition: ${({ theme }) => theme.transition};
}

.profiles__card__link:hover{
  opacity:.5;
  cursor:pointer;
}

${breakpointsMedia({
    md: css`

.button{
  padding:0;
  display:flex;
  align-items:center;
  width:25px;
}

.button img{
  width:25px;
}

.posts__post-header h2{
  font-weight: 600;
  font-size: 19px;
}

.posts__post-header__pic{
  width: 50px;
  height:50px;
}

.posts__post-footer__feedback-section span{
  font-weight: 500;
  font-size: 22px;
}
    `,
  })}
`;

export { FeedWrapper as default };
