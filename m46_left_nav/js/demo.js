seajs.config({
    base : 'http://localhost:520/m46_left_nav',
    debug : true
});
seajs.use("js/seajs/modules/right_bar.js", function (RB) {
    var rb = new RB();
    rb.init();
});