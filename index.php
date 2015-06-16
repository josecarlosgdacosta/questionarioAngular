<!DOCTYPE html>
<html lang="pt-br" ng-app="Questionario">
    <head>
        <meta charset="UTF-8">
        <title>Questionario com AngularJS</title>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/modules/questionario.js"></script>
    </head>

    <body>

        <h2>Question&aacute;rio</h2>

        <div ng-controller="questionarioGenerator">
            <table class="table table-bordered table-condensed" style="width: 70%">
                <tr>
                    <td class="success text-center"><strong>{{arrMetas[0].nomeMeta}}</strong></td>
                    <td ng-repeat="x in arrMetas[0].instancias.perguntas"">{{x.codPergunta}}</td>
                </tr>

                <tr ng-repeat="instancia in arrMetas[0].instancias">
                    <td class="info text-center"><em>{{instancia.dscInstancia}}</em></td>
                    <td ng-repeat="pergunta in instancia.perguntas" class="text-center">
                        <input type="text" name="pergunta" id="{{pergunta.seqPergunta}}" ng-disabled="{{!pergunta.flgAplicabilidade}}""/>
                    </td>
                </tr>
            </table>
        </div>

    </body>

</html>