export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/profile/');
  }

  openFormModal() {
    this.cy.get('.addPicButton').click();
    return this;
  }

  fillFormPost({ photoUrl, filter, description }) {
    this.cy.get('input[name="photoUrl"]').type(photoUrl);
    this.cy.get('#setPreviewButton').click();
    this.cy.get('button').contains('Avançar').click();
    this.cy.get(`#${filter}`).click();
    this.cy.get('button').contains('Avançar').click();
    this.cy.get('input[name="description"]').type(description);

    return this;
  }

  submitPostForm() {
    this.cy.get('button').contains('Postar').click();

    return this;
  }
}
