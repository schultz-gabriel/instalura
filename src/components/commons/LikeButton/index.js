import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import LikeAnimation from './animations/like.json';

const ButtonLike = styled(Button)`
    padding:0;

    &:hover{
      opacity: initial;
      transform: scale(1.1);
    }
`;

export default function LikeButton({
  liked, onClick, width, height,
}) {
  const isLiked = Boolean(liked);
  const [animationDirection, setAnimationDirection] = React.useState(1);

  React.useEffect(() => {
    setAnimationDirection(isLiked ? 1 : -1);
  }, [isLiked]);

  return (
    <ButtonLike onClick={onClick} ghost width={width} height={height}>
      <Lottie
        config={{
          animationData: LikeAnimation,
          loop: false,
          autoplay: false,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={height}
        width={width}
        direction={animationDirection}
        isStopped={false}
        isPaused={false}
      />
    </ButtonLike>
  );
}

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
