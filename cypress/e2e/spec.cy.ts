describe('Application test with e2e', () => {

  it("testing the search", () => {
    cy.visit("/")
    cy.contains('Pesquisa')
  })

  it("Test the click search button", () => {
    cy.get("input").type("olavoparno");
    cy.get("#home-search").first().click();
    cy.contains("Estrelas");
    cy.contains("Seguindo");
    cy.contains("Seguidores");
  })


  it("test the repository button click", () => {
    cy.get("#card-repository").first().click();
    cy.contains("Repositórios");
    cy.contains("Ordenar por quantidade de estrelas");
  })


  it("Test the sort buttons", () => {
    cy.get("#card-growing").first().click();
    cy.get("#card-descending").first().click();
  })
})
