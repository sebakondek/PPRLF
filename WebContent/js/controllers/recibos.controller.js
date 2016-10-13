angular
    .module("recibos.controller", [])
    .controller("recibosCtrl", function ($scope) {
        $scope.firmadoNO = false;
        $scope.firmadoSI = true;

        $scope.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        $scope.years = ["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"];

        $scope.problemas = ["Problema 1", "Problema 2", "Problema 3", "Problema 4", "Problema 5", "Otro"];
    });