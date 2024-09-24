Cypress.on('uncaught:exception', (err, runnable) => {
    // Logar o erro para fins de depuração
    console.log('Exceção capturada:', err.message);
    
    // Retornar false para impedir que o Cypress falhe o teste
    return false;
  });