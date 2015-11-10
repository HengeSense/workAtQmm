/**
 * Created by james on 2015/10/26.
 */
$(function () {
    seajs.config({
        vars: {
            'locale': 'zh-cn'
        },
        alias: {
            'CategoryNavBar': 'CategoryNavBar/index-nav.js',
            'ninePicRoll': 'ninePic/index.js',
            'imgsRollX': 'imgsRollX/index.js',
            'triRanksMostClick': 'triRanksMostClick/index.js',
            'rightSideFloatFixed': 'rightSideFloatFixed/index.js',
            'layer': 'layer/layer.js'
        },
        debug: true,
        base: '/m43.layer/js/seajs/module/',
        charset: 'utf-8'
    });

    seajs.use("layer/layer.js", function (LY) {
        if (LY) {
            var ly = new LY({
                width: 620,
                height: 484,
                img: "indexshow2.png",
                link: "http://s.click.taobao.com/2iSyimx",
                effect : "slide"
            }, {
                width: 70,
                height: 70,
                img: "small_layer.png",
            });
            ly.show();
        }
    })

});