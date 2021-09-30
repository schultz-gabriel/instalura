import React from 'react';
import Logo from '../../../theme/Logo';
import MenuWrapper from './style/LoggedMenuWrapper';
import TextField from '../../forms/TextField';
import Button from '../Button';

export default function LoggedMenu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Logo>
        <Logo />
      </MenuWrapper.Logo>
      <MenuWrapper.Menu>
        <TextField
          placeholder="Pesquisar"
          name="search"
          type="search"
          margin="0"
          divClassName="searchDiv"
          inputClassName="searchInput"
        />
        <Button type="button" ghost variant="secondary.main" className="addPicButton">
          <img src="/images/add.png" alt="adicionar foto" />
        </Button>
        <Button type="button" ghost variant="secondary.main" href="/app/login" order="1">
          <img src="/images/home.png" alt="home" />
        </Button>
        <Button type="button" ghost variant="secondary.main" order="2" className="searchIcon">
          <img src="/images/search.png" alt="home" />
        </Button>
        <Button type="button" ghost variant="secondary.main" order="4">
          <img src="/images/heart.png" alt="likes" />
        </Button>
        <Button type="button" ghost variant="secondary.main" order="5">
          <img className="userPic" src="/images/nick.jpg" alt="user" />
        </Button>
      </MenuWrapper.Menu>
    </MenuWrapper>
  );
}
