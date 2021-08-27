import React from 'react';
import { Lottie } from '@crello/react-lottie';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import errorAnimation from '../public/images/404.json';
import Box from '../src/components/foundations/layout/Box';

function Page404() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="auto"
          height="60vh"
          config={{ animationData: errorAnimation, loop: true, autoplay: true }}
        />
      </Box>
    </div>
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Erro 404',
    },
  },
});
