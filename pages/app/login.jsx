// import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import ComingSoon from '../../src/components/screens/UnderConnstructionScreen';

export default websitePageHOC(ComingSoon, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
