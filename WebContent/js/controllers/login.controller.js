angular
    .module("login.controller", ["ngStorage"])
    .controller("loginCtrl", function ($scope, $window, $localStorage) {
        $scope.errorMsg = "";
        $scope.login = function (params) {
            if (params.usuario == "admin" && params.password == "admin") {
               $localStorage.user = params.usuario;
               $localStorage.pass = params.password;
               $localStorage.role = "admin";
               $window.location.href = "WEB-INF/html/general/principal.html";
            } else if (params.usuario == "user" && params.password == "user") {
               $localStorage.user = params.usuario;
               $localStorage.pass = params.password;
               $localStorage.role = "user";
               $window.location.href = "WEB-INF/html/general/principal.html";
            } else {
               $scope.error = false;
               $scope.errorMsg = "Credenciales Incorrectas.";
           }
        }
    });

    