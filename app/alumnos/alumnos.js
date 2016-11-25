/**
 * Created by Daniel on 25/11/2016.
 */
'use strict';

angular.module('myApp.alumnos', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/alumnos', {
            templateUrl: 'alumnos/alumnos.html',
            controller: 'alumnosCtrl'
        });
    }])


    .controller('alumnosCtrl', ["$scope",function($scope) {
        $scope.alumnos=[
            {"cod":"20134592F","nombres":"Samuel","apellidos":"Pinto Altamirano",
                "cursos":[
                    {"cod":"ST414","denominacion":"Inteligencia Artificial","cred":"2","ciclo":"3","especialidad":"Sistemas"},
                    {"cod":"ST214","denominacion":"Tópicos de Ingeniería de Sistemas","cred":"3","ciclo":"2","especialidad":"Sistemas"},
                ]
            },
            {"cod":"20144592J","nombres":"Raul","apellidos":"Quesada Fuentes",
                "cursos":[
                    {"cod":"ST414","denominacion":"Inteligencia Artificial","cred":"2","ciclo":"3","especialidad":"Sistemas"},
                    {"cod":"ST214","denominacion":"Tópicos de Ingeniería de Sistemas","cred":"3","ciclo":"2","especialidad":"Sistemas"},
                ]
            },
            {"cod":"20124592T","nombres":"Carlos","apellidos":"Mari Estrada",
                "cursos":[
                    {"cod":"ST414","denominacion":"Inteligencia Artificial","cred":"2","ciclo":"3","especialidad":"Sistemas"},
                    {"cod":"ST214","denominacion":"Tópicos de Ingeniería de Sistemas","cred":"3","ciclo":"2","especialidad":"Sistemas"},
                ]
            },
            {"cod":"20154592R","nombres":"Victor","apellidos":"Cueva Llanos",
                "cursos":[
                    {"cod":"ST414","denominacion":"Inteligencia Artificial","cred":"2","ciclo":"3","especialidad":"Sistemas"},
                    {"cod":"ST214","denominacion":"Tópicos de Ingeniería de Sistemas","cred":"3","ciclo":"2","especialidad":"Sistemas"},
                ]
            }
        ]
    }]);