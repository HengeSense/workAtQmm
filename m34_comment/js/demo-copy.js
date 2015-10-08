$(function () {
    function Smile(div) {
        if (div) {
            this.div = div;
            this.textarea = this.div.find('.textarea_comment');
            //this.smileConfig = this.getSmileConfig();
            this.init();
        }
        this.smileConfigString = '{"[高兴]":"23","[皱眉]":"24","[阴笑]":"25","[鄙视]":"26","[邪恶]":"27","[大囧]":"28","[惊喜]":"29","[小眼睛]":"30","[小怒]":"31","[无语]":"32","[傻笑]":"33","[期待]":"34","[得逞]":"35","[呲牙]":"36","[喜极而泣]":"37","[晕死]":"38","[脸红]":"39","[亲亲]":"40","[狂汗]":"41","[困]":"42","[饥饿]":"43","[得意]":"44","[抠鼻]":"45","[抽烟]":"46","[内伤]":"47","[口水]":"48","[吐]":"49","[流鼻涕]":"50","[绷带]":"51","[吐舌]":"52","[口罩]":"53","[不说话]":"54","[不出所料]":"55","[装大款]":"56","[尴尬]":"57","[喷水]":"58","[喷血]":"59","[咽气]":"60","[哼小曲]":"61","[吹泡泡]":"62","[愤怒]":"63","[冻住]":"64","[赞一个]":"65","[差评]":"66","[中指]":"67","[哦耶]":"68","[拳头]":"69","[手掌]":"70","[就是你]":"71","[过来]":"72","[吃雪糕]":"73","[吃香蕉]":"74","[ok]":"75","[看不见]":"76","[无所谓]":"77","[欢呼]":"78","[偷笑]":"79","[无奈]":"80","[害羞]":"81","[打脸]":"82","[想一想]":"83","[嘘]":"84","[烧香]":"85","[抱拳]":"86","[鼓掌]":"87","[观察]":"88","[锁眉]":"89","[黑线]":"90","[汗]":"91","[哭泣]":"92","[阴暗]":"93","[暗地观察]":"94","[潜水]":"95","[蜡烛]":"96","[投降]":"97","[吐血倒地]":"98","[便便]":"99","[长草]":"100","[绿帽子]":"101","[注意安全]":"102","[被砍]":"103","[捶打]":"104","[肿包]":"105","[坐等]":"106","[看热闹]":"107","[深思]":"108","[被监视]":"109","[探头]":"110","[看看]":"111","[嘿嘿嘿]":"112","[睁大眼睛]":"113","[伸舌头]":"114","[吃骨头]":"115","[摸摸头]":"116","[被咬了]":"117","[献花]":"118","[献黄瓜]":"119","[献香蕉]":"120","[举个栗子]":"121","[该吃药了]":"122","[卫生纸]":"123","[＋1]":"124","[烧钱]":"125","[有钱任性]":"126","[丢骨头]":"127","[丢手雷]":"128","[丢肥皂]":"129","[飞吻]":"130","[钻被窝]":"131","[谋杀]":"132","[大宝剑]":"133","[手枪]":"134","[鞭子]":"135","[炸药包]":"136","[自杀]":"137","[中枪]":"138","[击掌]":"139","[扇耳光]":"140","[砸钱]":"141","[抽打]":"142","[相爱相杀]":"143","[斩杀]":"144","[背刺]":"145","[中刀]":"146","[糗大了]":"1","[示爱]":"2","[晕]":"3","[酷]":"4","[流泪]":"5","[饿了]":"6","[闭嘴]":"7","[做鬼脸]":"8","[馋]":"9","[坏笑]":"10","[抓狂]":"11","[呵呵]":"12","[淡定]":"13","[冷汗]":"14","[色]":"15","[惊讶]":"16","[希望]":"17","[伤心]":"18","[微笑]":"19","[惊吓]":"20","[哈哈]":"21","[吃饭]":"22"}';
        this.smileConfig = JSON.parse(this.smileConfigString);
    }

    Smile.prototype = {
        init: function () {
            this.event();
        },
        event: function () {
            var that = this;
            this.div.on('click', '.aj-biaoqin', function (e) {
                e.stopPropagation();
                that.toggleSmile();
            });
            this.div.on('click', '.smileBox li a', function (e) {
                e.stopPropagation();
                that.choose($(this));
                that.toggleSmile(false);
            });
            this.div.on('click', '.smileLayerBg', function (e) {
                e.stopPropagation();
            });
            this.div.on('click', '.smileLayerBg .smilePage a', function () {
                that.exchangeSmileTab($(this).index());
            });
            $(document).on('click', function () {
                that.toggleSmile(false);
            });
        },
        exchangeSmileTab: function (index) {
            var lis = this.div.find('.smileLayerBg .smilePage a'),
                uls = this.div.find('.smileLayerBg .smileBox');
            lis.removeClass('current').eq(index).addClass('current');
            uls.hide().eq(index).show();
        },
        toggleSmile: function (bool) {
            var area = this.div.find('.aj-biaoqin-wrap .smileLayerBg');
            if (bool !== undefined) {
                bool && area.show();
                bool || area.hide();
            } else {
                area.toggle();
            }
        },
        choose: function (obj) {
            var val = $(obj).attr("default-data");
            this.addHtml(val);
        },
        addHtml: function (val) {
            this.textarea.val(this.textarea.val() + val);
        },
        render: function (container) { // render 接收一个 Dom容器, 会把里面的"表情特殊字符"转换为图片
            var html = $(container).html(),
                htmlCopy = html,
                reg = /\[[^\]]+\]/g,
                reg2,
                match,
                replace,
                that = this,
                arr;

            while ((arr = reg.exec(html)) !== null) {
                match = arr[0];
                replace = that.smileConfig[match];
                if (replace) {
                    replace = wrap(replace);
                    htmlCopy = htmlCopy.replace(match, replace);
                }
            }
            function wrap(val) {
                var index = parseInt(val, 10),
                    style;
                if (index <= 73) {
                    style = "background-position:-" + (index - 1) * 34 + 'px 0px';
                } else {
                    style = "background-position:-" + (index - 74) * 34 + 'px -36px';
                }
                return "<span class='aj-comment-smile-bg' style='" + style + "'></span>";
            }

            $(container).html(htmlCopy);
        },
        dealRender: function (wrap) { // dealRender 接收一个Dom对象, 该对象是评论的外围包裹div
            var lis = wrap.find('.comment_listBox .comment_list'),
                that = this;
            lis.each(function () {
                if (!$(this).hasClass('aj-has-render')) {
                    $(this).addClass('aj-has-render');
                    $(this).find('.comment_conWrap .comment_con p').each(function () {
                        that.render(this);
                    });
                }
            });

        },
        dealRenderForWap: function (wrap) {
            var lis = wrap.find('.aj-comments-one'),
                that = this;
            lis.each(function () {
                if (!$(this).hasClass('aj-has-render')) {
                    $(this).addClass('aj-has-render');
                    $(this).find('.aj-o-li .reply_content').each(function () {
                        var em = $(this).find('em');
                        that.render(this);
                        //$(this).find('em').replaceWith(em);
                    });
                    $(this).find('h5 p').each(function () {
                        that.render(this);
                    });
                }
            });
        },
        renderSmileEventForWap: function (dom) {
            var that = this;
            $(dom).on('aj.renderSmile', function () {
                that.dealRenderForWap(dom);
            });
        },
        bindRenderEventFor: function (coDom) { // 如果在其它脚本里渲染评论区域的表情, 请触发绑定在 div#comment 的 aj.render事件
            var that = this;
            coDom.on('aj.render', function () {
                that.dealRender(coDom);
            });
        },
        getSmileConfig: function () {   // 如果以后添加表情, 可以用这个方法刷新config json数据
            var config = {},
                className,
                key,
                lis;
            lis = this.div.find('.aj-biaoqin-wrap .smileLayerBg .smileBox li a');
            lis.each(function () {
                className = $(this).attr('class').split(' ');
                key = $(this).attr('default-data');
                $.each(className, function (index, item) {
                    if (item.indexOf("smile") !== -1) {
                        config[key] = item.substr(5);
                    }
                });

            });
            return config;
        }
    };
    var comments = $('#form1 .aj-tr .comment'),
        func = new Smile();
    comments.each(function () {
        func.render(this);
    });
});
