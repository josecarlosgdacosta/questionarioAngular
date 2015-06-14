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
            <table class="table table-bordered">
                <tr>
                    <td>{{getMeta.nomeMeta}}</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td ng-repeat="codPergunta in arrMetas[0].instancias.perguntas">{{codPergunta.p1}}</td>
                </tr>
                <tr ng-repeat="instancia in arrMetas[0].instancias">
                    <td>{{instancia.dscInstancia}}</td>
                    <td>
                        <input type="text" name="pergunta" id="{{instancia.perguntas[$index]}}" />
                    </td>
                </tr>
            </table>
        </div>

    </body>

</html>