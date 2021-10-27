import styled from 'styled-components';

const ProfilePageWrapper = styled.main`
background-color: ${({ theme }) => theme.colors.background.main.color};
z-index: 1;
margin-bottom: 100px;
`;

ProfilePageWrapper.UserInfo = styled.section`
    width: 100%;
`;

ProfilePageWrapper.UserPics = styled.section`
        width:100%;


    .userPosts{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width:100%;
    }


`;

export { ProfilePageWrapper as default };
