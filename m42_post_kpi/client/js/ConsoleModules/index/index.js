/**
 * Created by james on 2015/10/19.
 */
define(function (require, exports, module) {
    require("c");
    var div = $('#aj-nav');
    function Nav(div) {
        this.div = div;
        this.event();
        this.init();
    }
    Nav.prototype = {
        event : function () {
            var that = this;
            this.div.on('click', '.aj-module-kpi', function () {
                that.kpi();
            });
        },
        init : function () {
            var qmm_action = _.urlParams('qmm_action'),
                that = this;
            if (!qmm_action || typeof  qmm_action !== 'string'){
                return false;
            }
            switch (qmm_action) {
                case 'kpi':
                    that.kpi();
                    break;
                default :
                    break;
            }
        },
        kpi : function () {

            require('kpi');
        }
    };
    (new Nav(div));
});