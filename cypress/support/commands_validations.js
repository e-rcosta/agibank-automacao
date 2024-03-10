Cypress.Commands.add("result", (tag, conteudo) => {
    cy.contains(tag, conteudo).should('be.visible');
});
