/*jslint browser : true*/
/*global $,console*/
(function () {
    "use strict";
    // window.onbeforeunload = function (){
       // return "Are you sure to leave this page ?";
    // }
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude);
    }, function (error) {
        console.log(error.code);
        console.log(error.message);
    });
    
    function A(){
        this.name = 'Yoko';
    }
    A.prototype = {
        hide : function () {
            this.div.style.display = 'none';
        }
    };
    function B(id){
        this.div = document.getElementById(id);
        A.call(this);
        return this.div;
    }
    window.B = B;
}());