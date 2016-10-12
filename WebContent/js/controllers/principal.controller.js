angular
    .module("principal.controller", ["ngStorage"])
    .controller("ppalCtrl", function ($scope, $window, $localStorage) {
        $scope.user = $localStorage.user;

        if ($localStorage.role === "admin") {
            $scope.role = true;
        } else {
            $scope.role = false;
        }

        $scope.logout = function () {
            $localStorage.$reset();
        };
    });