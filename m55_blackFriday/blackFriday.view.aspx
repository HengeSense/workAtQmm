<%@ Page Title="" Language="C#" Inherits="System.Web.Mvc.ViewPage<List<Quanmama.Models.Post>>" %>

<%@ Import Namespace="Quanmama.Models" %>
<%@ Import Namespace="Quanmama.Helper" %>
<!doctype html>
<html>
<head>
    <title>2015年黑五攻略,2015年黑五攻略</title>
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link rel="stylesheet" href="/html/qmm1111/bootstrap.min.css" tppabs="http://www.quanmama.com/resources/public/css/bootstrap.min.css"
        type="text/css" />
    <script type="text/javascript" src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"
        tppabs="http://www.quanmama.com/resources/public/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript">        var zhiyou_open = 1; </script>
    <script type="text/javascript" src="/html/qmm1111/userbase.1.0.min.js" tppabs="http://zhiyou.quanmama.com/resources/js/userbase.1.0.min.js?20151030"></script>
    <script type="text/javascript" src="/html/qmm1111/main.js" tppabs="http://www.quanmama.com/resources/public/js/main.js"></script>
    <!--[if lt IE 9]>
    <script src="/html/qmm1111/html5.js" tppabs="http://www.quanmama.com/resources/public/js/html5.js"></script>
    <link rel="stylesheet" href="/html/qmm1111/ieHack.css" tppabs="http://www.quanmama.com/resources/public/css/ieHack.css" type="text/css"/>
    <script src="/html/qmm1111/html5shiv.min.js" tppabs="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="/html/qmm1111/respond.min.js" tppabs="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="/html/qmm1111/icon.css" tppabs="http://www.quanmama.com/resources/public/css/icon.css"
        type="text/css">
    <!--[if !IE]><!-->
    <link rel="stylesheet" href="/html/qmm1111/icon_notIE.css" tppabs="http://www.quanmama.com/resources/public/css/icon_notIE.css"
        type="text/css">
    <!--<![endif]-->
    <link href="/html/blackFriday/model.css" tppabs="http://www.quanmama.com/resources/css/model.css"
        rel="stylesheet" name="默认风格">
    <link href="/html/qmm1111/model-bsn2.css" tppabs="http://www.quanmama.com/resources/css/model-bsn2.css"
        rel="stylesheet" name="广告位2">
    <meta property="og:type" content="" />
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js" tppabs="http://www.quanmama.com/resources/public/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/html/qmm1111/module.js" tppabs="http://www.quanmama.com/resources/js/module.js"></script>
    <script>
        $(function () {
            $(".dealout a").each(function () {
                var obj = $(this);
                var thislink = obj.attr("href");

                if (thislink && thislink.length > 0 && thislink.indexOf("quanmama") == -1
            && thislink.indexOf("localhost") == -1 && thislink.indexOf("http") != -1) {
                    obj.attr("target", "_blank").attr("href", "http://www.quanmama.com/t/goto.aspx?from=deal&url=" + thislink);
                }
            });
        });
    </script>
    <!--form-->
    <style>
        .banner
        {
            padding: 0;
        }
        .banner h1
        {
            padding: 0;
            position: relative;
        }
        .banner-logo
        {
            position: absolute;
            top: 20px;
            left: 0;
        }
        #module_2374
        {
            background-color: #222 !important;
            padding: 20px 0 0;
            margin-bottom: 30px;
        }
        #module_2374 h3, #module_2374 p, #module_2374 span
        {
            display: none;
        }
        #module_2374 li > div
        {
            border: 0px solid #f4949d;
        }
        .pure_code ul {
    max-width: 1050px;
    margin: 0 auto;
    overflow: hidden;
}
.pure_code li {
    width: 170px;
    height: 145px;
    overflow: hidden;
    float: left;
    margin-right: 6px;
    margin-bottom: 6px;
}
.pure_code li:nth-child(6n) {
    margin-right: 0;
}
.pure_code li img {
    width: 100%;
}
        .hotlist > h2
        {
            max-width: 1050px;
            height: 39px;
            margin-bottom: 40px;
        }
        #module_2378 > h2
        {
            display: none;
            background: url("/html/qmm1111/56387d10ebb3d2682.jpg")  top center;
        }
        #module_2380 > h2
        {
            display: none;
            background: url("/html/qmm1111/56387ea87359a1945.jpg")  top center;
            margin-bottom: 20px;
        }
        #module_2410 > h2
        {
            display: none;
            background: url("/html/qmm1111/5638840566b743621.jpg")  no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2382 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388bc43cc192964.jpg")  top center;
            margin-bottom: 20px;
        }
        #module_2412 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388c35ee9222341.jpg")  no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2404 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388d1d2c9fc148.jpg")  top center;
            margin-bottom: 20px;
        }
        #module_2414 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388dda2dc193858.jpg")  no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2418 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388ed6969814323.jpg")  top center;
        }
        #module_2420 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388fb2aaada9062.jpg")  top center;
        }
        #module_2378
        {
            padding-top: 30px;
        }
        #module_2380, #module_2382, #module_2404
        {
            padding-top: 20px;
        }
        #module_2404
        {
            padding-bottom: 20px;
        }
        #module_2414
        {
            padding-bottom: 50px;
        }
        .lucky
        {
            background: url("5638910a4830e1964.jpg")  top center;
            max-width: 1050px;
            margin: 0 auto 20px;
        }
        .lucky a
        {
            display: block;
            text-align: center;
        }
        .lucky img
        {
            max-width: 100%;
        }
        .others
        {
            max-width: 1050px;
            width: 100%;
            overflow: hidden;
            margin: 0 auto;
        }
        .review
        {
            width: 49%;
            float: left;
        }
        .more-act
        {
            width: 49%;
            float: right;
        }
        .review img, .more-act img
        {
            max-width: 100%;
        }
        #nav-lift
        {
            background-color: #f4394a;
            border-radius: 5px;
            padding-top: 50px;
            border: 0px;
        }
        #nav-lift li
        {
            background-color: #db1829;
            border-radius: 5px;
        }
        #nav-lift li a
        {
            color: White;
        }
        #nav-lift li:hover
        {
            background-image: -moz-linear-gradient(top, #ffc043, #fc880c);
            background: -webkit-linear-gradient(top, #ffc043, #fc880c);
            background: -o-linear-gradient(top, #ffc043, #fc880c);
        }
        .return-top
        {
            background-color: #650d16;
            display: block;
            color: #fed45f;
        }
        .return-top:link
        {
            color: #fed45f;
        }
        .return-top:hover
        {
            color: #fed45f;
        }
        .return-top:action
        {
            color: #fed45f;
        }
        .return-top:visited
        {
            color: #fed45f;
        }
        #nav-lift .return-top:hover
        {
            background-image: -moz-linear-gradient(top, #7f121e, #650d16);
            background: -webkit-linear-gradient(top, #7f121e, #650d16);
            background: -o-linear-gradient(top, #7f121e, #650d16);
        }
        #nav-lift img
        {
            position: absolute;
            top: -65px;
            left: -7px;
        }
        .countdowm
        {
            width: 480px;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -226px;
        }
        .countdowm h3, .countdowm div
        {
            max-width: 100%;
        }
        .countdowm h3
        {
            color: #650d16;
            font-weight: 600;
            margin-bottom: 14px;
        }
        .countdowm div
        {
            margin-bottom: 19px;
        }
        .countdowm span
        {
            display: inline-block;
        }
        .countdowm .time
        {
            width: 50px;
            height: 68px;
            background-color: #2a2a2a;
            border-radius: 5px;
            margin-right: 10px;
            vertical-align: bottom;
            font-size: 40px;
            line-height: 68px;
            color: white;
        }
        .countdowm .time-type
        {
            font-size: 16px;
            top: 8px;
            position: relative;
            font-weight: 600;
            color: #650d16;
        }
        .countdowm .time-type-day
        {
            margin-right: 22px;
        }
        .countdowm .time-type-hour
        {
            margin-right: 9px;
        }
        .hotlist li
        {
            margin-bottom: 20px;
        }
        #module_2418
        {
            padding-bottom: 60px;
        }
        #module_2418 .price
        {
            display: none;
        }
        #module_2418 p
        {
            margin-top: 0;
        }
        #module_2374 li > div:hover
        {
            box-shadow: 0 2px 10px #9e0411;
        }
        #module_2380, #module_2382
        {
            padding-bottom: 0px;
        }
        #module_2410, #module_2412
        {
            padding-top: 0px;
            padding-bottom: 40px;
        }
        #module_2410 .more span
        {
            border-radius: 20px;
            height: 40px;
            line-height: 36px;
            background-color: white;
            border: 2px solid #57cdea;
            color: #4ac9f8;
            font-size: 20px;
        }
        #module_2410 .more span:hover
        {
            background-color: #edfafd;
        }
        #module_2412 .more span
        {
            border-radius: 20px;
            height: 40px;
            line-height: 36px;
            background-color: white;
            border: 2px solid #fec249;
            color: #fb9216;
            font-size: 20px;
        }
        #module_2412 .more span:hover
        {
            background-color: #fff8eb;
        }
        #module_2404 .more span
        {
            border-radius: 20px;
            height: 40px;
            line-height: 36px;
            background-color: white;
            border: 2px solid #57cdea;
            color: #4ac9f8;
            font-size: 20px;
        }
        #module_2404 .more span:hover
        {
            background-color: #edfafd;
        }
        #module_2414 .more span
        {
            border-radius: 20px;
            height: 40px;
            line-height: 36px;
            background-color: white;
            border: 2px solid #57cdea;
            color: #4ac9f8;
            font-size: 20px;
        }
        #module_2414 .more span:hover
        {
            background-color: #edfafd;
        }
        #module_2418 .more span
        {
            border-radius: 20px;
            height: 40px;
            line-height: 36px;
            background-color: white;
            border: 2px solid #fec249;
            color: #fb9216;
            font-size: 20px;
        }
        #module_2418 .more span:hover
        {
            background-color: #fff8eb;
        }
        #module_2376
        {
            padding-top: 0;
        }
        .hotlist ul span.price
        {
            height: 36px;
        }
        .hotlist ul p
        {
            margin: 6px auto;
        }
        
        .aj-item-a
        {
            padding: 20px;
            width: 240px;
            height: 240px;
        }
        .hotlist .aj-item-a img
        {
            display: block;
        }
        @media screen and (max-width: 480px)
        {
            .banner .banner-logo
            {
                top: 10px;
                max-width: 100px;
            }
            .pure_code li
            {
                width: 45%;
            }
            .countdowm
            {
                width: 300px;
                margin-left: -146px;
            }
            .countdowm h3
            {
                margin-bottom: -22px;
                font-size: 16px;
            }
            .countdowm div
            {
                margin-bottom: 6px;
            }
            .countdowm .time
            {
                width: 26px;
                height: 36px;
                font-size: 20px;
                line-height: 36px;
                margin-right: 5px;
            }
            .countdowm .time-type-day, .countdowm .time-type-hour
            {
                margin-right: 7px;
            }
            .countdowm .time-type
            {
                font-size: 14px;
            }
            .review
            {
                width: 100%;
                float: none;
            }
            .more-act
            {
                width: 100%;
                float: none;
            }
            .lucky
            {
                margin-bottom: 0;
            }
        }
        @media screen and (max-width: 375px)
        {
            .pure_code li
            {
                width: 44.5%;
            }
            .pure_code li img
            {
                height: 75px;
            }
            .countdowm h3
            {
                margin-bottom: -24px;
            }
            .countdowm div
            {
                margin-bottom: 4px;
            }
        }
        @media screen and (max-width: 360px)
        {
            .pure_code li
            {
                width: 44%;
            }
            .pure_code li img
            {
                height: 74px;
            }
            .countdowm h3
            {
                font-size: 14px;
            }
        }
        @media screen and (max-width: 320px)
        {
            .pure_code li
            {
                width: 43.5%;
            }
            .pure_code li img
            {
                height: 64px;
            }
            .countdowm h3
            {
                margin-bottom: -28px;
            }
        }
    </style>
    <!--seo-->
    <!--seo end-->
</head>
<body>
    <div id="aj">
        <header>
    <div class="navBarWrap">
        <!--navBar-->
        <style>
            .aj-nav-a
            {
                margin-right: 20px;
            }
            #module_2536
            {
                padding-bottom:50px;
            }
            .aj-separator
            {
                text-align:center;
                background:url(/html/blackFriday/56445d1bddb6e9868.png) top center;
                max-height:106px;
                overflow:hidden;
                width:100%;
                max-width:1050px;
                margin:0 auto;
                }
        </style>
        <div class="navBar">
            <nav class="nav">
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com">券妈妈首页</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/new">
                    优惠券</a> 
                <a class="aj-nav-a" target="_blank" href="http://zhi.quanmama.com/">今日值得买</a> 
                <a class="aj-nav-a" target="_blank" href="http://faxian.quanmama.com/">发现</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/haitao">
                            海淘</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/newkfc">肯德基优惠券</a>
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/user/coupons">我的券妈妈</a>
            </nav>
            <!--loginArea-->
            <!--loginArea end-->
            <div class="clear">
            </div>
        </div>
        <!--navBar end-->
    </div>
</header>
        <div id="nav-lift">
            <ul>
                <li scrollto="#"><a class="return-top" href="#" _hover-ignore="1">返回顶部</a></li>
            </ul>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 wrap">
                    <section>
                <div id="module_2372" class="banner items" style="background:url('/html/blackFriday/564431e0247336416.png') no-repeat 0 0;background-size: cover;background-position: center;"><h1><img src="/html/blackFriday/5644397cafcd01907_v2.png" tppabs="http://eimg.quanmama.com/201510/28/56302f0ea9db92333.png" alt="" title=""></h1></div>
                <div id="module_2374" class="hotlist items" style="background:url('') no-repeat 0 0;background-size: cover;background-position: center;">
                    <%=Banner.GetBanner("blackFriday2015_head").Content %>
                    
                    </div>
<!--hongbao-->

                    <div id="module_2378" class="hotlist items" style="background:url('') no-repeat 0 0;background-size: cover;background-position: center;"><h2><img src="/html/qmm1111/56387d10ebb3d2682.jpg" tppabs="http://eimg.quanmama.com/201511/03/56387d10ebb3d2682.jpg" alt="网购攻略" title="网购攻略"></h2>
                    <ul>
                        <%
                            Tags tags_gl = Tags.GetTagsByTagsName("黑五攻略");
                            Tags tags_cx = Tags.GetTagsByTagsName("黑五促销");
                            Tags tags_hd = Tags.GetTagsByTagsName("黑五活动");
                                                        
                            List<Post> list_gl = new List<Post>();
                            List<Post> list_cx = new List<Post>();
                            List<Post> list_hd = new List<Post>();

                            if (tags_gl != null)
                            {
                                list_gl = Post.GetListByTags(tags_gl.SysNo, 8);
                            }
                            if (tags_cx != null) {
                                list_cx = Post.GetListByTags(tags_cx.SysNo, 8);
                            }
                            //if (tags_hd != null) {
                            //    list_hd = Post.GetListByTags(tags_hd.SysNo, 12);
                            //}

                            YouhuiQueryParams param = new YouhuiQueryParams(PageTypes.HaitaoZhidemai, PostTypes.Smzdm, PromotionTypes.Default, "", 0, 0, 0, 0, Country._Haitao.CountryCode, 1, 12);

                            list_hd = Post.GetZdmList(param);

                            %>
                            <li class="aj-separator"></li>
                            <%
                            foreach (var item in list_gl)
                            {
                                Html.RenderPartial("~/Views/Shared/shuang1111.ascx", item);
                            }
                                
                            %>
                            <li class="aj-separator"></li>
                            <%
                            foreach (var item in list_cx)
                            {
                                Html.RenderPartial("~/Views/Shared/shuang1111.ascx", item);
                            }
                            
                            %>
                            <li class="aj-separator"></li>
                            <%
                            foreach (var item in list_hd)
                            {
                                Html.RenderPartial("~/Views/Shared/shuang1111.ascx", item);
                            }    
                            
                        %>
                    </ul><input type="hidden" name="elevator" value="网购攻略"></div>
                    
                    <div id="module_2536" class="pure_code"><div class="mall-title"></div>
                    <div class="aj-separator"><img src="/html/blackFriday/564477ea0b593300_v2.png" /></div>
    <%=Banner.GetBanner("blackFriday2015_bottom").Content %>
<%--<div class="lucky"><a href="" target="_blank"><img src="/html/blackFriday/5638912149b4a5827.png"></a></div>--%>
<%--<div class="others">
    <div class="review"><a href="" target="_blank"><img src="/html/blackFriday/564eb8e7e02e96159.png"></a></div>
    <div class="more-act"><a href="" target="_blank"><img src="/html/blackFriday/564eb9af5c7d72501.png"></a></div>
</div>--%><input type="hidden" name="elevator" value="会场直达"></div>
                   
                    
                    </section>
                    <footer></footer>
                    <!-- pop login -->
                    <!-- pop login end -->
                    <!-- pop collect-->
                    <div class="pop pop_no_title" id="pop-collect">
                        <i class="pop-close icon-cross-lighter">
                            <!--[if lt IE 8]>x<![endif]-->
                        </i>
                        <!-- pop-content -->
                        <div class="pop-content twoLine">
                            <i class="icon-loginright">
                                <!--[if lt IE 8]>√<![endif]-->
                            </i>
                            <p class="pop_info_show">
                                已收藏<br>
                                <a href="javascript:if(confirm('http://www.quanmama.com/user/collection  \n\n?τ???? Teleport Ultra ??, ?? ?ˇ????·????????????????c  \n\n?Ы?????????'))window.location='http://www.quanmama.com/user/collection'"
                                    tppabs="http://www.quanmama.com/user/collection" class="a_small a_underline"
                                    target="_blank">去我的收藏夹 <span class="arrow">&gt;</span></a></p>
                        </div>
                        <!-- pop-content end -->
                    </div>
                    <!-- pop collect end -->
                    <!-- pop nocollect-->
                    <div class="pop pop_no_title" id="pop-nocollect">
                        <i class="pop-close icon-cross-lighter">
                            <!--[if lt IE 8]>x<![endif]-->
                        </i>
                        <!-- pop-content -->
                        <div class="pop-content twoLine">
                            <i class="icon-loginright">
                                <!--[if lt IE 8]>√<![endif]-->
                            </i>
                            <p class="pop_info_show">
                                已取消收藏<br>
                                <a href="javascript:if(confirm('http://www.quanmama.com/user/collection  \n\n?τ???? Teleport Ultra ??, ?? ?ˇ????·????????????????c  \n\n?Ы?????????'))window.location='http://www.quanmama.com/user/collection'"
                                    tppabs="http://www.quanmama.com/user/collection" class="a_small a_underline"
                                    target="_blank">去我的收藏夹 <span class="arrow">&gt;</span></a></p>
                        </div>
                        <!-- pop-content end -->
                    </div>
                    <!-- pop nocollect end -->
                    <!-- pop -->
                    <div class="pop pop_no_title" id="pop-closed">
                        <i class="pop-close icon-cross-lighter">
                            <!--[if lt IE 8]>x<![endif]-->
                        </i>
                        <!-- pop-content -->
                        <div class="pop-content twoLine">
                            <i class="icon-logintanhao">
                                <!--[if lt IE 8]>404<![endif]-->
                            </i>
                            <p class="pop_info">
                            </p>
                        </div>
                        <!-- pop-content end -->
                    </div>
                    <div id="cover">
                    </div>
                    <!-- pop end -->
                </div>
            </div>
        </div>
        <footer class="footerWrap" id="footer">
    <div class="footer">
        <div class="footerTop">
            <a href="/about" target="_blank">关于券妈妈</a> <a href="http://www.quanmama.com/quan_vipshop" target="_blank">唯品会优惠券</a> <a href="http://www.quanmama.com/quan_360buy" target="_blank">
                    京东优惠券</a> <a href="http://www.quanmama.com/quan_jumei" target="_blank">聚美优品优惠券</a>
            <a href="http://www.quanmama.com/newkfc" target="_blank">肯德基麦当劳优惠券</a> <a href="http://zhi.quanmama.com/" target="_blank">今日值得买</a> <a href="http://faxian.quanmama.com/" target="_blank">发现频道</a>
            <a href="/contact" target="_blank">联系我们</a><a href="/faq" target="_blank">帮助中心</a>
            <a href="/joinus" target="_blank">加入我们</a>
        </div>
        <div class="info">
            ? copyright 2010-2015 券妈妈优惠券网. All rights reserved.
        </div>
    </div>
</footer>
    </div>
    <!--christmas-->
    <!--christmas end-->
    <script>
        $(function () {
            //分享按钮分辨率过滤
            var ww = $(window).width();
            if (ww >= 768) {
                window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "16" }, "slide": { "type": "slide", "bdImg": "0", "bdPos": "right", "bdTop": "100"} }; with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
            }
        })
    </script>
    <script>
        $('.banner h1').append('<img class="banner-logo" src="5644484be67ae5685.png" /><div class="countdowm"><h3>距离黑五开始还有</h3><div><span class="time time-day-tens"></span><span class="time time-day-single"></span><span class="time-type time-type-day">天</span><span class="time time-hour-tens"></span><span class="time time-hour-single"></span><span class="time-type time-type-hour">小时</span><span class="time time-minute-tens"></span><span class="time time-minute-single"></span><span class="time-type time-type-minute">分钟</span></div></div>');
        var ddt = 0, dds = 0; hht = 0; hhs = 0; mmt = 0; mms = 0;
        function timer() {
            var ts = (new Date(2015, 10, 28, 13, 0, 0)) - (new Date());
            if (ts < 0) {
                clearInterval(tim);
                $('.countdowm').children().remove();
                $('.countdowm').css({ 'max-width': '750px', 'width': '100%' }).css({ 'margin-left': -($('.countdowm').width() / 2) }).append('<img src="564167db96da51277.png" style="position: relative;bottom: 0;width: 100%">');
            } else {
                var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);
                var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);
                var mm = parseInt(ts / 1000 / 60 % 60, 10);
                var ss = parseInt(ts / 1000 % 60, 10);
                checkTime(dd, 'day');
                checkTime(hh, 'hour');
                checkTime(mm, 'minute');
                $('.time-day-tens').html(ddt);
                $('.time-day-single').html(dds);
                $('.time-hour-tens').html(hht);
                $('.time-hour-single').html(hhs);
                $('.time-minute-tens').html(mmt);
                $('.time-minute-single').html(mms);
            }
        }
        function checkTime(num, type) {
            var numt = 0, nums = 0;
            if (num / 10 > 0) {
                numt = parseInt(num / 10);
                nums = num % 10;
            } else {
                numt = 0;
                nums = num;
            }
            if (type == 'day') {
                ddt = numt;
                dds = nums;
            } else if (type == 'hour') {
                hht = numt;
                hhs = nums;
            } else {
                mmt = numt;
                mms = nums;
            }
        }
        var tim = setInterval(timer, 1000);

        
        $('#nav-lift').prepend('<img src="/html/blackFriday/5645adbb06d883388_v2.png"/*tpa=http://eimg.smzdm.com/201511/13/5645adbb06d883388.png*/ style="position: absolute;left: -28px;top:-40px;width:165px;" />').append('<a class="return-top" href="#"><img src="/html/qmm1111/5645b3383f03c3983.png"/*tpa=http://eimg.smzdm.com/201511/13/5645b3383f03c3983.png*/ style="position: absolute;left: 58px;bottom: -62px;" /></a>');

        var ua = navigator.userAgent.toLowerCase();
        if (/iphone/.test(ua) && /smzdmapp/.test(ua)) {
            $('#module_2532 .more').hide();
        }
</script>
    <script type="text/javascript">
        if (typeof (init_choujiang_form_vid) == 'function') {
            init_choujiang_form_vid(84);
        }
    </script>
    <script type="text/javascript">
        (function (win, doc) {
            var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
            if (!win.alimamatk_show) {
                s.charset = "gbk";
                s.async = true;
                s.src = "http://a.alimama.cn/tkapi.js";
                h.insertBefore(s, h.firstChild);
            };
            var o = {
                pid: "mm_12782845_3416031_33432058", /*推广单元ID，用于区分不同的推广渠道*/
                appkey: "", /*通过TOP平台申请的appkey，设置后引导成交会关联appkey*/
                unid: "", /*自定义统计字段*/
                type: "click" /* click 组件的入口标志 （使用click组件必设）*/
            };
            win.alimamatk_onload = win.alimamatk_onload || [];
            win.alimamatk_onload.push(o);
        })(window, document);
    </script>
    </div>
    <%--    <div id='aj-go-top' style="display: none; position: fixed; right: 100px; text-decoration: underline;
        bottom: 100px; z-index: 999; color: #666; font-weight: bold; cursor: pointer;"
        onclick="$('html,body').animate({scrollTop : 0})">
        返回顶部
    </div>--%>
    <script>
        $(function () {
            var win = $(window),
            timer = null,
            goTop = $('#aj-go-top');
            win.on("scroll", function () {
                if (!timer) {
                    timer = setTimeout(function () {
                        if (win.scrollTop() > 500) {
                            goTop.show();
                        } else {
                            goTop.hide();
                        }
                        timer = 0;
                    });
                }
            });
            goTop.css({
                right: (win.width() - 1050) / 2 - 20 - goTop.width()
            });
        });
    </script>

    <script>
        $(function () {
            var win = $(window);
            var config = {
                list: [
                    {
                        src: "/html/blackFriday/56445d37e301b5662_v2.png",
                        title: "海淘攻略"
                    },
                    {
                        src: "/html/blackFriday/56446253ac71c1146_v2.png",
                        title: "必看促销"
                    },
                    {
                        src: "/html/blackFriday/56446a9c5191e5223_v3.png",
                        title: "必看活动"
                    }
                ],
                selector: ".aj-separator",
                hashPrefix: "aj-jump-to"
            };

            var dom = $(config.selector);
            for (var i = 0; i < config.list.length; i++) {
                config.list[i].id = config.hashPrefix + (Math.random() + "").substr(2, 8);
                dom.eq(i).html("<img src='" + config.list[i].src + "' data-title='" + config.list[i].title + "' id='" + config.list[i].id + "' />");
            }

            try {
                var nav = $("#nav-lift"),
                domNew = $(document.createElement("ul"));

                $.each(config.list, function () {
                    domNew.append("<li class='aj-jump'><a data-href='#" + this.id + "' >" + this.title + "</a></li>");
                });
                domNew.append("<li class='aj-jump'><a data-href='#module_2536' >会场直达</a></li>");
                nav.find("ul").before(domNew);

            } catch (ex) { }


            nav.on("click", '.aj-jump a', function (e) {
                e.preventDefault();
            });
            nav.on("click", ".aj-jump", function () {
                var id = $(this).find("a").attr("data-href");
                $("html, body").animate({
                    "scrollTop": $(id).offset().top - 40 + 'px'
                });
            });


        });
    </script>

</body>
</html>
