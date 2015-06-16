// DECLARANDO O MÓDULO 'Questionario'.
var questionarioModule = angular.module("Questionario", []);

questionarioModule.controller("questionarioGenerator", function($scope){

    // ATRIBUINDO O RETORNO DO BACKEND À VARIÁVEL DO ESCOPO.
    $scope.arrMetas = metas;

    var getMeta = function(index) {
        return $scope.arrMetas[index] || $scope.arrMetas[0];
    }

});

// POSSÍVEL RETORNO DO BACKEND.
var metas = [{
    nomeMeta: "Meta 1",
    instancias: [
        {
            dscInstancia:"Tribunal",
            perguntas:[
                {seqPergunta:1, codPergunta:"P1.1", dscPergunta:"Valor para a pergunta P1.1.", flgAplicabilidade:true},
                {seqPergunta:2, codPergunta:"P1.2", dscPergunta:"Valor para a pergunta P1.2.", flgAplicabilidade:true},
                {seqPergunta:3, codPergunta:"P1.3", dscPergunta:"Valor para a pergunta P1.3.", flgAplicabilidade:true},
                {seqPergunta:4, codPergunta:"P1.4", dscPergunta:"Valor para a pergunta P1.4.", flgAplicabilidade:true},
                {seqPergunta:5, codPergunta:"P1.5", dscPergunta:"Valor para a pergunta P1.5.", flgAplicabilidade:true},
                {seqPergunta:6, codPergunta:"P1.6", dscPergunta:"Valor para a pergunta P1.6.", flgAplicabilidade:true}
            ]
        },

        {
            dscInstancia:"Juizados Especiais",
            perguntas:[
                {seqPergunta:1, codPergunta:"P1.1", dscPergunta:"Valor para a pergunta P1.1.", flgAplicabilidade:true},
                {seqPergunta:2, codPergunta:"P1.2", dscPergunta:"Valor para a pergunta P1.2.", flgAplicabilidade:false},
                {seqPergunta:3, codPergunta:"P1.3", dscPergunta:"Valor para a pergunta P1.3.", flgAplicabilidade:true},
                {seqPergunta:4, codPergunta:"P1.4", dscPergunta:"Valor para a pergunta P1.4.", flgAplicabilidade:false},
                {seqPergunta:5, codPergunta:"P1.5", dscPergunta:"Valor para a pergunta P1.5.", flgAplicabilidade:true},
                {seqPergunta:6, codPergunta:"P1.6", dscPergunta:"Valor para a pergunta P1.6.", flgAplicabilidade:false}
            ]
        },

        {
            dscInstancia:"Turmas Recursais",
            perguntas:[
                {seqPergunta:1, codPergunta:"P1.1", dscPergunta:"Valor para a pergunta P1.1.", flgAplicabilidade:false},
                {seqPergunta:2, codPergunta:"P1.2", dscPergunta:"Valor para a pergunta P1.2.", flgAplicabilidade:true},
                {seqPergunta:3, codPergunta:"P1.3", dscPergunta:"Valor para a pergunta P1.3.", flgAplicabilidade:false},
                {seqPergunta:4, codPergunta:"P1.4", dscPergunta:"Valor para a pergunta P1.4.", flgAplicabilidade:true},
                {seqPergunta:5, codPergunta:"P1.5", dscPergunta:"Valor para a pergunta P1.5.", flgAplicabilidade:false},
                {seqPergunta:6, codPergunta:"P1.6", dscPergunta:"Valor para a pergunta P1.6.", flgAplicabilidade:true}
            ]
        }
    ]
}]
