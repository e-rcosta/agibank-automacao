Cypress.Commands.add("searchIcon", () => {
    cy.get('[class="ast-search-icon"]');
});

Cypress.Commands.add("searchField", () => {
    cy.get('#search-field');
});
