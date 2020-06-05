// Generated from .\CalcParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CalcParser.
function CalcParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CalcParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CalcParserListener.prototype.constructor = CalcParserListener;

// Enter a parse tree produced by CalcParser#compilationUnit.
CalcParserListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by CalcParser#compilationUnit.
CalcParserListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by CalcParser#input.
CalcParserListener.prototype.enterInput = function(ctx) {
};

// Exit a parse tree produced by CalcParser#input.
CalcParserListener.prototype.exitInput = function(ctx) {
};


// Enter a parse tree produced by CalcParser#output.
CalcParserListener.prototype.enterOutput = function(ctx) {
};

// Exit a parse tree produced by CalcParser#output.
CalcParserListener.prototype.exitOutput = function(ctx) {
};


// Enter a parse tree produced by CalcParser#calc.
CalcParserListener.prototype.enterCalc = function(ctx) {
};

// Exit a parse tree produced by CalcParser#calc.
CalcParserListener.prototype.exitCalc = function(ctx) {
};


// Enter a parse tree produced by CalcParser#expression.
CalcParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by CalcParser#expression.
CalcParserListener.prototype.exitExpression = function(ctx) {
};



exports.CalcParserListener = CalcParserListener;