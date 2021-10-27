import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const PostWrapper = styled.li`
list-style: none;


${({ feedPost }) => feedPost && css`
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-bottom: 50px;  
    width: 100%;

.posts__post-header{
  display: flex;
  justify-content: space-between;
  width:100%;
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
`};

${({ profile }) => profile && css`
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        position:relative;
        width:30%;
        margin-bottom: 3%;

    &:hover{
        cursor: pointer;
    }

    &:hover .userPosts__post__image{
        filter: brightness(.5);
    }

    &:hover .userPosts__post__feedback{
        visibility: visible;
    }

    .userPosts__post__image{
        object-fit: cover;
        height: 100%;
        width:100%;
        transition: ${({ theme }) => theme.transition};
    }

    .userPosts__post__feedback{
        display:flex;
        justify-content: center;
        margin-bottom:-10px;
        position:absolute;
        transition: ${({ theme }) => theme.transition};
        visibility: hidden;
        width: 100%;
        z-index:9;
    }

    .userPosts__post__feedback__icon{
        filter: invert(1);
        width: 20px;
    }

    ${breakpointsMedia({
    xs: css`
        height:91px;
    `,
    sm: css`
         height:91px;
     `,
    md: css`
         height:230px;
     `,
  })}
`};

`;

export { PostWrapper as default };
