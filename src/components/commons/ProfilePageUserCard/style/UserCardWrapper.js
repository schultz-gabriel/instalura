import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const UserCardWrapper = styled.section`
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
        justify-content: space-around;
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

export { UserCardWrapper as default };
