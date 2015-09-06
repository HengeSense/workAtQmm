/**
 * Created by james on 2015/9/6.
 */
function bindThis(f, oTarget) {
    return function(){
        f.apply(oTarget, arguments);
    }
}
bindThis(function (a, b) {
    console.log(this.test + a + b);
    return this.test + a + b
}, {test: 1})(2, 3);


(function () {
    function add(){
        console.log(arguments[0] + arguments[1] + this.c);
    }
    var prop = {};
    prop.c = 123;
    add.apply(prop, [2, 3, 4]);
})();