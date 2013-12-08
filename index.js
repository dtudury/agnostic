var esprima = require('esprima');
var escodegen = require('escodegen');

exports.destanderdify = function(code) {
    var ast = esprima.parse(code, {
        comment: true
    });
    return escodegen.generate(ast, {
        comment: true
    });
}