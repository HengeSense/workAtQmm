/**
 * Created by james on 2015/10/26.
 */
$(function () {
    seajs.config({
        vars: {
            'locale': 'zh-cn'
        },
        alias : {
            'CategoryNavBar' : 'CategoryNavBar/index-nav.js',
            'ninePicRoll' : 'ninePic/index.js',
            'imgsRollX' : 'imgsRollX/index.js',
            'triRanksMostClick' : 'triRanksMostClick/index.js',
            'rightSideFloatFixed' : 'rightSideFloatFixed/index.js',
            'layer' : 'layer/layer.js'
        },
        debug : true,
        base: '/m43.layer/js/seajs/module/',
        charset: 'utf-8'
    });
    
    seajs.use("layer", function (LY) {
        var ly = new LY({
            width : 751,
            height : 587,
            img : "http://www.malianyi.com/qmm/images/indexshow2.png",
            link : "http://hbao.tmall.com/pc"
        }, {
            width : 128,
            height : 54,
            img : "http://www.malianyi.com/qmm/images/small_layer2.png",
        });
        ly.show();
    });
});