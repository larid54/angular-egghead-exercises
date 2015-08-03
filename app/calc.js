'use strict';

var calcApp = angular.module('calcApp', []);

//SumCtrl

calcApp.controller('SumCtrl',function($scope){

    this.firstNumber = 12;
    this.secondNumber =1;

    this.add = function(firstNumber,secondNumber) {
        this.sum =firstNumber+secondNumber ;
    }
    return $scope.SumCtrl = this;

});

//SubCtrl

calcApp.controller('SubCtrl',function($scope){

    this.firstNumber = 12;
    this.secondNumber = 1;

    this.subtraction  = function(first,second) {
        this.sub = first - second;
    }
    return $scope.SubCtrl = this;

});