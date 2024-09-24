import { elements as ele } from "./elements";

class CalculoDeFreteComErro {

    preencherCep() {
        cy.get(ele.cepOrigem).type('00000000');
    }

    clicarPesoProduto() {
        cy.get(ele.pesoProduto).click();
        cy.get(ele.ate300g).click();
    }

    preencherDimensoes() {
        cy.get(ele.alturaProduto).type('0.3');
        cy.get(ele.larguraProduto).type('180');
        cy.get(ele.comprimentoProduto).type('250');
    }

    preencherDestino() {
        cy.get(ele.capDestino).type('11111111');
    }

    clicarCalculoDeFrete() {
        cy.get(ele.calcularFreteComDesconto).click();
    }

    validarMsgDeErroAltura() {
        cy.get(ele.validarMensagemErroAltura, { timeout: 5000 });
        cy.get(ele.validarMensagemErroAltura).contains('Altura mínima 0.4 cm.')

    }

    validarMsgErroLargura() {
        cy.get(ele.validarMensagemErroLargura).contains('Largura máxima 150 cm.')
    }

    validarMsgComprimento() {
        cy.get(ele.validarMensagemErroComprimento).contains('Comprimento máximo 150 cm.')
    }

    validarMsgErroSoma() {
        cy.get(ele.validarMensagemErroSoma).should('exist')
        cy.get(ele.validarMensagemErroSoma).contains('a soma resultante da altura + largura + comprimento não deve superar 300 cm.')
    }

    preencherDadosInvalidos() {
        this.preencherCep()
        this.clicarPesoProduto()
        this.preencherDimensoes()
        this.preencherDestino()
        this.clicarCalculoDeFrete()
        this.validarMsgDeErroAltura()
        this.validarMsgErroLargura()
        this.validarMsgComprimento()
        this.validarMsgErroSoma()
    }
}

export default new CalculoDeFreteComErro();
