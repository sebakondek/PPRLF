angular
    .module("recibos.controller", [])
    .controller("recibosCtrl", function ($scope) {
        $scope.firmadoNO = false;
        $scope.firmadoSI = true;
    
        $scope.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    });