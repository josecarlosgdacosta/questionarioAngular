(function () {

    var questMod = angular.module("questionario", []);

    questMod.controller("metaController", function() {

        this.arrMetas = metas;

        var getMeta = function(index) {
            return this.arrMetas[index] || this.arrMetas[0];
        };

    });

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
    }];

})();
