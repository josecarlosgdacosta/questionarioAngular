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
            perguntas:[{"1":"", "2":"", "3":"", "4":"", "5":"", "6":""}]
        },

        {
            dscInstancia:"Juizados Especiais",
            perguntas:[{"1":"", "2":"", "3":"", "4":"", "5":"", "6":""}]
        },

        {
            dscInstancia:"Turmas Recursais",
            perguntas:[{"1":"", "2":"", "3":"", "4":"", "5":"", "6":""}]
        }
    ]
}]