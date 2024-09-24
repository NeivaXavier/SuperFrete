import calculoDeFreteComSucessoPage from '../pages/calculoDeFreteComSucesso/calculoDeFreteComSucessoPage';
import calculoDeFreteComErro from '../pages/calculoDeFreteComErro/calculoDeFreteComErro';


describe('Calculo de frete com desconto', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/'); 
  });

  it('Calculo de frete com sucesso', () => {
    calculoDeFreteComSucessoPage.preencherDadosValidos();

  });

  it('Calculo de frete com dados inválidos', () => {
    calculoDeFreteComErro.preencherDadosInvalidos();

  });
});
