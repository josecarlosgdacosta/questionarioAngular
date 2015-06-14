<!DOCTYPE html>
<html ng-app="questionario">
    <head>
        <title>Questionario com AngularJS</title>
        <link type="text/css" href="css/bootstrap.min.css" rel="stylesheet"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/controllers/controllers.js"></script>
    </head>

    <body>

        <h2>Question&aacute;rio</h2>

        <div ng-controller="metaController as mc">
            <table class="table table-bordered">
                <tr>
                    <td>{{mc.arrMetas[0].nomeMeta}}</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td ng-repeat="codPergunta in mc.arrMetas[0].instancias.perguntas">{{codPergunta.p1}}</td>
                </tr>
                <tr ng-repeat="instancia in mc.arrMetas[0].instancias">
                    <td>{{instancia.dscInstancia}}</td>
                    <td>
                        <input type="text" name="pergunta" id="{{instancia.perguntas[$index]}}" />
                    </td>
                </tr>
            </table>
        </div>

    </body>

</html>