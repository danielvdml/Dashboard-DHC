/**
 * Created by Daniel on 25/11/2016.
 */
'use strict';

angular.module('myApp.horario', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/horario', {
            templateUrl: 'horario/horario.html',
            controller: 'horarioCtrl'
        });
    }])

    .controller('horarioCtrl', ["$scope",function($scope) {
        $scope.horarios=[
            {"codcurso":"ST414","seccion":"V","nombrecurso":"Inteligencia Artificial","codprof":"123","profesor":"Tomas Torres Alta","tothoras":"4","cred":"2",
                "horario":[
                    {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                    {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                ]
            },
            {"codcurso":"ST214","seccion":"V","nombrecurso":"Tópicos de Ingeniería de Sistemas","codprof":"123","profesor":"Julio Zuñiga Tomas","tothoras":"4","cred":"3",
                "horario":[
                    {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                    {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                ]
            },
            {"codcurso":"GP124","seccion":"V","nombrecurso":"Automatización de Procesos","codprof":"123","profesor":"Diego Matinez Estrada","tothoras":"4","cred":"2",
                "horario":[
                    {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                    {"dia":"Miercoles","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                ]
            }
        ]
    }]);