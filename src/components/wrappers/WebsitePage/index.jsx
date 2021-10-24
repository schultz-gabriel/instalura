/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import LoggedMenu from '../../commons/LoggedMenu';
import Modal from '../../commons/Modal';
import Box from '../../foundations/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import PostEditor from '../../patterns/PostEditor';
import SEO from '../../commons/SEO';

import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
  user,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  const [isPicModalOpen, setPicModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
          setPicModalState(!isPicModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),

      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro
              propsDoModal={propsDoModal}
              onClose={() => {
                setModalState(false);
              }}
            />
          )}
        </Modal>
        <Modal
          isOpen={isPicModalOpen}
          onClose={() => {
            setPicModalState(false);
          }}
        >
          {(propsDoModal) => (
            <PostEditor
              propsDoModal={propsDoModal}
              onClose={() => {
                setPicModalState(false);
              }}
            />
          )}
        </Modal>
        {menuProps.display && (
          <Menu
            onCadastrarClick={() => setModalState(true)}
          />
        )}
        {menuProps.logged && (
          <LoggedMenu
            user={user}
            onPostClick={() => setPicModalState(true)}
          />
        )}
        {children}
        {menuProps.display && (
          <Footer />
        )}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    logged: false,
  },
  messages: {},
  user: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    logged: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  messages: PropTypes.object,
  user: PropTypes.object,
};
