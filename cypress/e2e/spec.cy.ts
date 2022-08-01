describe('Application test with e2e', () => {

  it("testing the search", () => {
    cy.visit('/')
    cy.contains('Pesquisa')
  })

  it("Testing the click on the repository button", () => {
    cy.get("input").type("anotherjesse");
    cy.get('#home-search').first().click();
    cy.contains('Estrelas');
    cy.contains('Seguindo');
    cy.contains('Seguidores');
  })

  it("Testing the sort buttons", () => {
    cy.get('#card-growing').first().click();
    cy.get('#card-descending').first().click();;
  })
})

// it('Visits the initial project page', () => {
//   cy.visit('/')
//   cy.contains('Pesquisa')

//   //Testando a pesquisa
//   cy.get("input").type("anotherjesse");
//   cy.get('#home-search').first().click();
//   cy.contains('Estrelas');
//   cy.contains('Seguindo');
//   cy.contains('Seguidores');

//   //Testando o click no botão repositório
//   cy.get('#card-repositorio').first().click();
//   cy.contains('Repositórios');
//   cy.contains('Ordenar por quantidade de estrelas');

//   //Testando os botões de ordenação
//   cy.get('#card-growing').first().click();
//   cy.get('#card-descending').first().click();

// })
