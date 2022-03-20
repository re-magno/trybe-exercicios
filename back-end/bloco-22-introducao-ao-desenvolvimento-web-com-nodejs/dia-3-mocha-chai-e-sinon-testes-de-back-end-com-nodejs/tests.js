const { expect } = require('chai');

const checkNumbSign = require('./checkNumbSign');


describe('Executa a função checkNumbSign', () =>{
  describe('se o número for maior que 0', () => {
    describe ('a resposta', () => {
      it('é uma string', () => {
        const response = checkNumbSign(8);

        expect(response).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const response = checkNumbSign(8);

        expect(response).to.be.equals('positivo');
      });
    });
  });

  describe('se o número for menor que 0', () => {
    describe ('a resposta', () => {
      it('é uma string', () => {
        const response = checkNumbSign(-8);

        expect(response).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const response = checkNumbSign(-8);

        expect(response).to.be.equals('negativo');
      });
    });
  });

  describe('se o número for igual que 0', () => {
    describe ('a resposta', () => {
      it('é uma string', () => {
        const response = checkNumbSign(0);

        expect(response).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const response = checkNumbSign(0);

        expect(response).to.be.equals('neutro');
      });
    });
  });

  describe('se o número for menor que 0', () => {
    describe ('a resposta', () => {
      it('é uma string', () => {
        const response = checkNumbSign(-8);

        expect(response).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const response = checkNumbSign(-8);

        expect(response).to.be.equals('negativo');
      });
    });
  });

  describe('se o parametro não for um número', () => {
    describe ('a resposta', () => {
      it('é uma string', () => {
        const response = checkNumbSign('abc');

        expect(response).to.be.a('string');
      });

      it('é igual a "o valor deve ser um número"', () => {
        const response = checkNumbSign('abc');

        expect(response).to.be.equals('o valor deve ser um número');
      });
    });
  });
});