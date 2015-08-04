/*jslint browser : true*/
/*global $,console*/
(function () {
	"use strict";
	function A() {
		var obj = [];
		obj.name = 'AJ';
		obj.say = function () {
			console.log("Hello World");
		};
		obj.B = B;
		return obj;
	}
	function B() {
		console.log(this.name);
	}
	window.xx = new A();
	
	function loop() {
		var i,
			arr = [4, 6, 2, 6, 2, 63, 5, 6, 3, 5, 6, 6, 74, 4],
			prop = [];
		for (i = 0; i < 10; i++) {
			(function () {
				prop.push(arr[i]);
			})();
		}
		console.log(prop);
	}
	loop();
}());