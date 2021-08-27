import React from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import comingSoonAnimation from '../../../../public/images/coming-soon.json';
import Box from '../../foundations/layout/Box';
import Button from '../../commons/Button';

const MessageWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export default function ComingSoon() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <MessageWrapper>
        <h1>Em construção</h1>
        <Lottie
          width="auto"
          height="60vh"
          config={{ animationData: comingSoonAnimation, loop: true, autoplay: true }}
        />
        <Button type="button" variant="secondary.main" href="/">
          Voltar para o início
        </Button>
      </MessageWrapper>
    </Box>
  );
}
