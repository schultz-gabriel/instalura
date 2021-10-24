import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const PostEditorWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main.color};
    box-shadow: -10px 0px 24px rgba(7, 12, 14, 0.1);
    width: 100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${({ theme }) => theme.borderRadius};


    ${breakpointsMedia({
    sm: css`
    height:100%;
    `,
    md: css`
    width: 400px;
    height: 700px;
    `,
  })}
`;

PostEditorWrapper.Header = styled.section`
    width: 100%;
    max-height: 300px;
    position: relative;
    display:flex;
    justify-content: flex-end;
`;

PostEditorWrapper.ImageField = styled.section`
    width: 100%;
    display: flex;
    margin:0;

.selectedPic{
    width: 100%;
    max-height:400px;
    object-fit: cover;
}

${breakpointsMedia({
    sm: css`
    max-height: 300px;

.selectedPic{
    max-height: 300px;
}
`,
    md: css`
    max-height:400px;
    height:400px;

    .selectedPic{
    max-height: 400px;
}
    `,
  })}
`;

PostEditorWrapper.Footer = styled.section`
    display: flex;
    min-height: 150px;
    padding: 20px 20px 10px 20px;
    width: 100%;
    margin-top:auto;
    height:100%;
    
    form{
        gap:10px;
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .carousel{
        /* width: 100%; */
        overflow-x: scroll;
        display: flex;
        /* padding: 5px 10px; */
        &::-webkit-scrollbar {
        display: none;
  }
  ${breakpointsMedia({
    md: css`
      &::-webkit-scrollbar {
        display: initial;
        width: 10px;
        height: 10px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: black;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #F5F5F5;
      }
    `,
  })}
    }

`;

export { PostEditorWrapper as default };
