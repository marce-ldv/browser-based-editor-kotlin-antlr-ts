let assert = require('assert');
let parserFacade = require('./ParserFacade.js');
let CalcLexer = require('../ANTLR/CalcLexer.js').CalcLexer;

function checkToken(tokens, index, typeName, column, text) {
    it('should have ' + typeName + ' in position ' + index, function () {
        assert.equal(tokens[index].type, CalcLexer[typeName]);
        assert.equal(tokens[index].column, column);
        assert.equal(tokens[index].text, text);
    });
}
describe('Basic lexing without spaces', function () {
    let tokens = parserFacade.getTokens("a=5");
    it('should return 3 tokens', function() {
      assert.equal(tokens.length, 3);
    });
    checkToken(tokens, 0, 'ID', 0, "a");
    checkToken(tokens, 1, 'EQUAL', 1, "=");
    checkToken(tokens, 2, 'NUMBER_LIT', 2, "5");
W