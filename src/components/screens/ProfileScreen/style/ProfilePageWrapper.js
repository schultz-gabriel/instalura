import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ProfilePageWrapper = styled.main`
background-color: ${({ theme }) => theme.colors.background.main.color};
z-index: 1;
margin-bottom: 100px;
`;

ProfilePageWrapper.UserInfo = styled.section`
    display: grid;
    grid-template-columns: 33% 66%;
    grid-template-rows: 70px 70px auto;
    width:100%;

    .user__image{
        align-items: center;
        display:flex;
        grid-column: 1;
        grid-row: 1 / 3;
        width: 100%;
    }

    .profilePic{
        border-radius: 50%;
        width: 100%;
    }

    .user__data{
        align-items: center;
        display:flex;
        grid-column: 2;
        grid-row: 1 / 3;
        justify-content: space-between;
        padding-left: 10px;
        width: 100%;
    }

    .user__data__counter{
        padding-left:5px;
    }

    .user__bio{
        display:flex;
        flex-direction: column;
        grid-column: 1 / 3;
        grid-row: 3;
    }

    ${breakpointsMedia({
    md: css`
        grid-template-rows: 1fr 1fr;
        padding: 30px;

    .user__image{
        grid-column: 1;
        grid-row: 1 / 3;
    }

    .user__data{
        align-items: flex-end;
        grid-column: 2;
        grid-row: 1 / 2;
        padding-left: 40px;
    }

    .user__bio{
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        padding-left: 40px;
    }

    `,
  })}
`;

ProfilePageWrapper.UserPics = styled.section`
        width:100%;


    .userPosts{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        /* padding:0; */
        width:100%;
    }

    .userPosts__post{
        list-style: none;
        position:relative;
        width:30%;
    }

    .userPosts__post:hover{
        cursor: pointer;
    }

    .userPosts__post:hover .userPosts__post__image{
        filter: brightness(.5);
    }

    .userPosts__post:hover .userPosts__post__feedback{
        visibility: visible;
    }

    .userPosts__post__image{
        width:100%;
        transition: ${({ theme }) => theme.transition};
    }

    .userPosts__post__feedback{
        bottom:50%;
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
`;

export { ProfilePageWrapper as default };
