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
    perguntasMeta: [
        {seqPergunta:"1", codPergunta:"P1.1", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
        {seqPergunta:"2", codPergunta:"P1.2", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
        {seqPergunta:"3", codPergunta:"P1.3", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
        {seqPergunta:"4", codPergunta:"P1.4", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
        {seqPergunta:"5", codPergunta:"P1.5", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
        {seqPergunta:"6", codPergunta:"P1.6", dscPergunta:"Descrição da pergunta", flgAtivo:"1", tipoResposta:"quant"},
    ],
    instancias: [
        {
            dscInstancia:"Tribunal",
            respostas:[
                {seqPergunta:1, flgAplicabilidade:true},
                {seqPergunta:2, flgAplicabilidade:true},
                {seqPergunta:3, flgAplicabilidade:true},
                {seqPergunta:4, flgAplicabilidade:true},
                {seqPergunta:5, flgAplicabilidade:true},
                {seqPergunta:6, flgAplicabilidade:true}
            ]
        },

        {
            dscInstancia:"Juizados Especiais",
            respostas:[
                {seqPergunta:1, flgAplicabilidade:true},
                {seqPergunta:2, flgAplicabilidade:false},
                {seqPergunta:3, flgAplicabilidade:true},
                {seqPergunta:4, flgAplicabilidade:false},
                {seqPergunta:5, flgAplicabilidade:true},
                {seqPergunta:6, flgAplicabilidade:false}
            ]
        },

        {
            dscInstancia:"Turmas Recursais",
            respostas:[
                {seqPergunta:1, flgAplicabilidade:false},
                {seqPergunta:2, flgAplicabilidade:true},
                {seqPergunta:3, flgAplicabilidade:false},
                {seqPergunta:4, flgAplicabilidade:true},
                {seqPergunta:5, flgAplicabilidade:false},
                {seqPergunta:6, flgAplicabilidade:true}
            ]
        }
    ]
}]
