<!DOCTYPE html>
<html lang="pt-br" ng-app="Questionario">
    <head>
        <meta charset="UTF-8">
        <title>Questionario com AngularJS</title>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>

    </head>

    <body>

        <h2>Question&aacute;rio</h2>

        <div ng-controller="questionarioGenerator">
            <table class="table table-bordered table-condensed" style="width: 70%">
                <tr>
                    <td class="success text-center"><strong>{{arrMetas[0].nomeMeta}}</strong></td>
                    <td class="info text-center" ng-repeat="x in arrMetas[0].perguntasMeta""><strong>{{x.codPergunta}}</strong></td>
                </tr>

                <tr ng-repeat="instancia in arrMetas[0].instancias">
                    <td class="info text-center"><em>{{instancia.dscInstancia}}</em></td>
                    <td ng-repeat="resposta in instancia.respostas" class="text-center" style="vertical-align: middle">
                        <span class="label label-danger" ng-show="{{!resposta.flgAplicabilidade}}">Não aplicável</span>
                        <input type="text" name="pergunta" id="{{resposta.seqPergunta}}" ng-hide="{{!resposta.flgAplicabilidade}}" ng-disabled="{{!resposta.flgAplicabilidade}}" />
                    </td>
                </tr>
            </table>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/modules/questionario.js"></script>

    </body>

</html>