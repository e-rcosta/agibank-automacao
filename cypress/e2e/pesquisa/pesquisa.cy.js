
import { conteudo } from "../../support/payload";

describe('pesquisa conteudo', () => {
    describe('Realizar busca por conteudo', () => {

        beforeEach(() => {
            cy.visit('/');
        })

        it(`Pesquisa por ${conteudo.emprestimosConsignados}`, () => {
            cy.searchIcon().click();
            cy.searchField().type(conteudo.emprestimosConsignados);
            cy.searchField().type('{enter}');
            cy.result('h1', 'Resultados encontrados para: ');
            cy.result('span', conteudo.emprestimosConsignados);
        });

        it(`Pesquisa por ${conteudo.contaCorrente}`, () => {
            cy.searchIcon().click();
            cy.searchField().type(conteudo.contaCorrente);
            cy.searchField().type('{enter}');
            cy.result('h1', 'Resultados encontrados para: ');
            cy.result('span', conteudo.contaCorrente);
        });
    });

});