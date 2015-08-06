'use strict';

var app = angular.module('app',[]);

app.controller("shopCtrl", function(){
    var ctrl = this;
    ctrl.isClicked = false;
    ctrl.name = '';
    ctrl.myFun = function(){
        ctrl.isClicked = true;
    }
});