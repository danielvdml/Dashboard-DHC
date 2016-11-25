'use strict';

angular.module('myApp.profesor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profesor', {
    templateUrl: 'profesor/profesor.html',
    controller: 'profesorCtrl'
  });
}])

.controller('profesorCtrl', ["$scope",function($scope) {
    $scope.profesores=[
      {"cod":"124","nombres":"Tomas","apellidos":"Torres Alta",
        "cursos":[
          {"cod":"ST414","cred":"2","ciclo":"3","especialidad":"Sistemas",
            "horarios":[
                {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
                {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
                {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]
          },
          {"cod":"ST432","cred":"3","ciclo":"2","especialidad":"Sistemas",
            "horarios":[
                {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
                {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
                {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
                {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]},
        ]
      },
      {"cod":"432","nombres":"Julio","apellidos":"Zuñiga Tomas",
        "cursos":[
          {"cod":"ST123","cred":"2","ciclo":"3","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]
          },
          {"cod":"ST564","cred":"3","ciclo":"2","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]},
        ]
      },
      {"cod":"232","nombres":"Victor","apellidos":"Borla Camus",
        "cursos":[
          {"cod":"ST125","cred":"2","ciclo":"3","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]
          },
          {"cod":"ST324","cred":"3","ciclo":"2","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]},
        ]
      },
      {"cod":"653","nombres":"Diego","apellidos":"Martinez Estrada",
        "cursos":[
          {"cod":"ST32","cred":"2","ciclo":"3","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]
          },
          {"cod":"ST214","cred":"3","ciclo":"2","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]},
        ]
      },
      {"cod":"232","nombres":"Carlos","apellidos":"Montalvo Mari",
        "cursos":[
          {"cod":"GP921","cred":"2","ciclo":"3","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]
          },
          {"cod":"GP321","cred":"3","ciclo":"2","especialidad":"Sistemas",
            "horarios":[
              {"dia":"Lunes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"14:00 pm.","horaFin":"16:00 pm."},
              {"dia":"Martes","horaInicio":"16:00 pm.","horaFin":"18:00 pm."},
              {"dia":"Sabado","horaInicio":"12:00 pm.","horaFin":"14:00 pm."},
              {"dia":"Sabado","horaInicio":"14:00 pm.","horaFin":"16:00 pm."}
            ]},
        ]
      }
    ]
}]);