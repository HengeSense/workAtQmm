/*jslint browser : true*/
/*global $,console*/
(function () {
    "use strict";
    // function A(){
        // this.name = 'Yoko';
        // this.age = 'Yoko';
    // }
    // A.prototype = {
        // hide : function () {
            // this.arr.forEach(function (obj) {
                // obj.style.display = 'none';
            // });
        // }
    // };
    // function B(id){
        // this.arr = [];
        // this.div = document.getElementById(id);
        // this.arr.push(this.div);
        // A.call(this);
        // return this.arr;
    // }
    // window.B = B;
    function loop() {
        var result = [],
            i;
        for (i = 0; i < 10; i++) {
            result[i] = (function () {
                var xx = i;
                return xx;
            })();
        }
        return result;
    }
    window.xx = loop();
}());