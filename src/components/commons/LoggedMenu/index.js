import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Logo from '../../../theme/Logo';
import MenuWrapper from './style/LoggedMenuWrapper';
import Box from '../../foundations/layout/Box';
import Grid from '../../foundations/layout/Grid';
import TextField from '../../forms/TextField';
import Button from '../Button';
import loginService from '../../../services/login/loginService';

export default function LoggedMenu({ user, onPostClick }) {
  // eslint-disable-next-line react/destructuring-assignment
  const { username } = user;
  const redirect = useRouter();

  const handleLogout = async () => {
    await loginService.logout(null);
    redirect.push('/');
  };
  return (
    <MenuWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 10 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <MenuWrapper.Logo>
              <Logo />
            </MenuWrapper.Logo>
            <MenuWrapper.Menu>
              <TextField
                placeholder="Pesquisar"
                name="search"
                type="search"
                margin="0"
                value=""
                onChange={() => {}}
                divClassName="searchDiv"
                inputClassName="searchInput"
              />
              <Button type="button" ghost variant="secondary.main" className="addPicButton" onClick={() => onPostClick()}>
                <img src="/images/add.png" alt="adicionar foto" />
              </Button>
              <Button type="button" ghost variant="secondary.main" href="/app/feed" order="1">
                <img src="/images/home.png" alt="home" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="2" className="searchIcon">
                <img src="/images/search.png" alt="a" />
              </Button>
              <Button type="button" ghost variant="secondary.main" order="4">
                <img src="/images/heart.png" alt="like" />
              </Button>
              <Box order="5" className="header__userButton">
                <Button type="button" ghost variant="secondary.main" href="/app/profile">
                  <img className="userPic" src={`https://github.com/${username}.png`} alt="botão para página de perfil" />
                </Button>
                <Box className="header__userButton_modal">
                  <Button
                    type="button"
                    ghost
                    variant="tertiary.main"
                    href="/app/profile"
                    fullWidth
                    style={{
                      width: '100%', justifyContent: 'flex-start', padding: '12px 20px', whiteSpace: 'nowrap',
                    }}
                  >
                    Meu Perfil
                  </Button>
                  <Button type="button" ghost variant="tertiary.main" onClick={handleLogout} fullWidth style={{ width: '100%', justifyContent: 'flex-start', padding: '12px 20px' }}>
                    Logout
                  </Button>
                </Box>
              </Box>
            </MenuWrapper.Menu>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </MenuWrapper>
  );
}

LoggedMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  onPostClick: PropTypes.func.isRequired,
};
