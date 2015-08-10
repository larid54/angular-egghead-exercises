'use strict';
var homeApp = angular.module('homeApp', []);

homeApp.provider('Home', function() {
    var exampleNum = 50;
    var color;
    return {

        setColor: function(value){
            color = value;
        },
        setNumber: function(value){
            exampleNum = value;
        },

        $get: function(){
            return {
                color: color,
                number: exampleNum % 2 ? 100 : 99
            }
        },
    };
});
homeApp.config(function (HomeProvider){
    HomeProvider.setColor("red");
    HomeProvider.setNumber(50);
})

homeApp.controller('HomeCtrl', function (Home)
{
    var ctrl = this;
    ctrl.color = Home.color;
    ctrl.number = Home.number;
});