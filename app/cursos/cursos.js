'use strict';

angular.module('myApp.cursos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cursos', {
    templateUrl: 'cursos/cursos.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope",function($scope) {
    $scope.cursos=[
      {"cod":"ST414","denominacion":"Inteligencia Artificial","cred":"2","ciclo":"3","especialidad":"Sistemas"},
      {"cod":"ST214","denominacion":"Tópicos de Ingeniería de Sistemas","cred":"3","ciclo":"2","especialidad":"Sistemas"},
      {"cod":"GP124","denominacion":"Automatización de Procesos","cred":"2","ciclo":"3","especialidad":"Industrial"},
      {"cod":"GP234","denominacion":"Diagnostico empresarial","cred":"3","ciclo":"1","especialidad":"Industrial"}
    ];
}]);