import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../../theme/utils/breakpointMedia';

const FeedWrapper = styled.main`

.button{
  align-items: center;
  display: flex;
  padding: 0;
  width: 20px;
}

.button img{
  width: 20px;
}

.posts{
  margin: 0;
  width: 100%;
}

.profiles{
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  width: 100%;
}

.profiles ul{
  width: 100%;
}

${breakpointsMedia({
    md: css`

.button{
  align-items: center;
  display: flex;
  padding: 0;
  width: 25px;
}

.button img{
  width: 25px;
}

.posts__post-header h2{
  font-weight: 600;
  font-size: 19px;
}

.posts__post-header__pic{
  height: 50px;
  width: 50px;
}

.posts__post-footer__feedback-section span{
  font-weight: 500;
  font-size: 22px;
}
    `,
  })}
`;

export { FeedWrapper as default };
