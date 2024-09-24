import { elements as el } from "./elements";

class CalculoDeFreteComSucessoPage {

    preencherCepValido() {
        cy.get(el.cepOrigem).type('08090284');
    }

    clicarPesoValido() {
        cy.get(el.pesoProduto).click();
        cy.get(el.ate300g).click();
    }

    preencherAltura() {
        cy.get(el.alturaProduto).type('2');
    }

    preencherLarguraValida() {
        cy.get(el.larguraProduto).type('11');
    }

    preencherComprimentoValido() {
        cy.get(el.comprimentoProduto).type('16');
    }

    preencherCepValidoDestino() {
        cy.get(el.cepDestino).type('05407-002');
    }

    clicarCalcularFreteDescontoValido() {
        cy.get(el.calcularFreteComDesconto).click();
    }

    validarOrigem() {
        cy.get(el.validarOrigem, { timeout: 10000 });
        cy.get(el.validarOrigem).scrollIntoView();
        cy.get(el.validarOrigem).should('be.visible').contains('Rua 03 de Outubro - Jardim Helena - São Paulo/SP')
        cy.get(el.validarDestino).should('be.visible').contains('Rua Cardeal Arcoverde - Pinheiros - São Paulo/SP')
    }
    
    preencherDadosValidos() {
        this.preencherCepValido()
        this.clicarPesoValido()
        this.preencherAltura()
        this.preencherLarguraValida()
        this.preencherComprimentoValido()
        this.preencherCepValidoDestino()
        this.clicarCalcularFreteDescontoValido()
        this.validarOrigem()
    }
}

export default new CalculoDeFreteComSucessoPage();
