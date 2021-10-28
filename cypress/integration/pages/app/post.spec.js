/// <reference types="cypress" />

import ProfileScreenPageObject from '../../../../src/components/screens/app/ProfileScreen/ProfileScreen.pageObject';

describe('postPhoto', () => {
  describe('go to the profile page', () => {
    it('open and fill the form modal', () => {
      const profilePage = new ProfileScreenPageObject(cy);
      profilePage
        .openFormModal()
        .fillFormPost({
          photoUrl: 'https://www.significadodossonhos.inf.br/wp-content/uploads/2019/02/sonhar-com-pato-1-1.png',
          filter: 'juno',
          description: 'ATENÇÃO! PATO DO CYPRESS!',
        })
        .submitPostForm();

      cy.url().should('include', '/app/feed/');
    });
  });
});
