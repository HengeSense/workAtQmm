/**
 * Created by james on 2015/10/19.
 */
define(function (require, exports, module) {
    require("c");

    var div = $('#aj-nav');
    function Nav(div) {
        this.div = div;
        this.event();
    }
    Nav.prototype = {
        event : function () {
            var that = this;
            this.div.on('click', '.aj-module-kpi', function () {
                that.kpi();
            });

        },
        kpi : function () {
            require('kpi');
        }
    };
    (new Nav(div));
});