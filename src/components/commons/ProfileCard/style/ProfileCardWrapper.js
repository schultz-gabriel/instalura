import styled, { css } from 'styled-components';

const CardWrapper = styled.div`

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
  width: 100%;

.profiles__card__pic{
  border-radius: 50%;
  width: 50px;
}

${({ main }) => main && css`
.profiles__card__pic{
  border-radius: 50%;
  width: 65px;
}
`}

.profiles__card__usernames{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 15px;
}

.profiles__card__link{
  align-items: center;
  display: flex;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
}

.profiles__card__link:hover{
  cursor: pointer;
  opacity: .5;
}`;

export { CardWrapper as default };
