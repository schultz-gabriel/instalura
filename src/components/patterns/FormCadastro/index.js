/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../Foundation/layout/Box';
import Grid from '../../Foundation/layout/Grid';
import Text from '../../Foundation/Text';

function FormContent(onClose) {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'omariosouto',
    email: 'devsoutinho@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <>
      <Button
        variant="primary.main"
        position="absolute"
        top="0"
        right="0"
        ghost
        onClick={() => onClose.onClose()}
      >
        x
      </Button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('O formulário ta pronto, vamos cadastrar de fato o usuario');
        }}
      >

        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Pronto para saber da vida dos outros?
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          marginBottom="32px"
        >
          Você está a um passo de saber tudoo que está
          rolando no bairro, complete seu cadastro agora!
        </Text>

        <div>
          <TextField
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            placeholder="Usuário"
            name="usuario"
            value={userInfo.usuario}
            onChange={handleChange}
          />
        </div>

        <Button
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        >
          Cadastrar
        </Button>
      </form>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal, onClose }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent onClose={onClose} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
