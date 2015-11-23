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
            background: url("/html/qmm1111/56387d10ebb3d2682.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56387d10ebb3d2682.jpg*/ top center;
        }
        #module_2380 > h2
        {
            display: none;
            background: url("/html/qmm1111/56387ea87359a1945.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56387ea87359a1945.jpg*/ top center;
            margin-bottom: 20px;
        }
        #module_2410 > h2
        {
            display: none;
            background: url("/html/qmm1111/5638840566b743621.jpg") /*tpa=http://eimg.quanmama.com/201511/03/5638840566b743621.jpg*/ no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2382 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388bc43cc192964.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388bc43cc192964.jpg*/ top center;
            margin-bottom: 20px;
        }
        #module_2412 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388c35ee9222341.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388c35ee9222341.jpg*/ no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2404 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388d1d2c9fc148.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388d1d2c9fc148.jpg*/ top center;
            margin-bottom: 20px;
        }
        #module_2414 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388dda2dc193858.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388dda2dc193858.jpg*/ no-repeat top center;
            margin-bottom: 20px;
            height: 23px;
        }
        #module_2418 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388ed6969814323.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388ed6969814323.jpg*/ top center;
        }
        #module_2420 > h2
        {
            display: none;
            background: url("/html/qmm1111/56388fb2aaada9062.jpg") /*tpa=http://eimg.quanmama.com/201511/03/56388fb2aaada9062.jpg*/ top center;
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
            background: url("5638910a4830e1964.jpg") /*tpa=http://eimg.quanmama.com/201511/03/5638910a4830e1964.jpg*/ top center;
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
                <%--<li scrollto=""><a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP"
                    target="_blank">天猫主会场</a></li>
                <li scrollto=""><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html"
                    target="_blank">京东主会场</a></li>
                <li scrollto=""><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://cuxiao.suning.com/city/9017/zh00090.htm"
                    target="_blank">苏宁主会场</a></li>
                <li scrollto=""><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://prom.gome.com.cn/html/prodhtml/topics/201510/chb/11party.html"
                    target="_blank">国美主会场</a></li>
                <li scrollto=""><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111"
                    target="_blank">可得主会场</a></li>
                <li scrollto=""><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071"
                    target="_blank">亚马逊主会场</a></li>--%>
                <li scrollto="#"><a class="return-top" href="#" _hover-ignore="1">返回顶部</a></li>
            </ul>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 wrap">
                    <section>
                <div id="module_2372" class="banner items" style="background:url('/html/blackFriday/564431e0247336416.png') no-repeat 0 0;background-size: cover;background-position: center;"><h1><img src="/html/blackFriday/5644397cafcd01907.png" tppabs="http://eimg.quanmama.com/201510/28/56302f0ea9db92333.png" alt="" title=""></h1></div>
                <div id="module_2374" class="hotlist items" style="background:url('') no-repeat 0 0;background-size: cover;background-position: center;">
                    <ul class="clearfix">
                <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"><img src="http://www.quanmama.com/html/qmm1111/5638c481ed58a1990.png.jpg" tppabs="http://eimg.quanmama.com/201511/05/563b3c735f4a18519.png"></a>
                            <h3><a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank">直达链接</a></span>
                        </div>
                    </li><li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                            <img src="http://www.quanmama.com/html/qmm1111/5638c498e166c6713.jpg" tppabs="http://eimg.quanmama.com/201511/03/5638b16fde0dc1085.png"></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank">直达链接</a></span>
                        </div>
                    </li>
                    <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111"
                             target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                             <img src="http://www.juanlaoda.com/qmmimg/kede.jpg" ></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111"
                              target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a
                            href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111" target="_blank">直达链接</a></span>
                        </div>
                    </li>

                    <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071" target="_blank"
                            onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                            <img src="http://www.quanmama.com/html/qmm1111/5638c1c331e9c1576.png" tppabs="http://eimg.quanmama.com/201511/03/5638b1f17dbb33643.png"></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071"
                             target="_blank">直达链接</a></span>
                        </div>
                    </li>
                    </ul>
                    <ul>
                <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"><img src="http://www.quanmama.com/html/qmm1111/5638c481ed58a1990.png.jpg" tppabs="http://eimg.quanmama.com/201511/05/563b3c735f4a18519.png"></a>
                            <h3><a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DlCR1yQzQBYocQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRPFqV%2B7Oyy0J1gyddu7kN9dXAz4qgLnmH44T6dYPHtWAmCr0AZwlhryv2xhn6FLuKUuZxIcp9pfUIgVEmFmgnbDX0%2BHH2IEVaX4VWt66S4EJPwiig1bxLP9BvYCQR6XAr%2BKQ71wHNCAqP8YyUoZZlq4cXg3ii9waXPs9Sj9Qli1np4c65at3FeX3cwyLTlAhj2l4PysJx%2FP" target="_blank">直达链接</a></span>
                        </div>
                    </li><li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                            <img src="http://www.quanmama.com/html/qmm1111/5638c498e166c6713.jpg" tppabs="http://eimg.quanmama.com/201511/03/5638b16fde0dc1085.png"></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://sale.jd.com/act/M7J62hoy1vugS.html" target="_blank">直达链接</a></span>
                        </div>
                    </li>
                    <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111"
                             target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                             <img src="http://www.juanlaoda.com/qmmimg/kede.jpg" ></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111"
                              target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a
                            href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.keede.com/event/kd20151111" target="_blank">直达链接</a></span>
                        </div>
                    </li>

                    <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                        <div>
                            <a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071" target="_blank"
                            onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');">
                            <img src="http://www.quanmama.com/html/qmm1111/5638c1c331e9c1576.png" tppabs="http://eimg.quanmama.com/201511/03/5638b1f17dbb33643.png"></a>
                            <h3><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071" target="_blank" onclick="ga('send', 'event','专题','http://www.quanmama.com/zhuanti/1111/2015/quanmama.com','/zhuanti/1111/2015/');"></a></h3>
                            <span class="price"></span>
                            <p></p>
                            <span class="col-sm-12" direct_link="1"><a href="http://www.quanmama.com/t/goto.aspx?union=smzdm&tag=1111&url=http://www.amazon.cn/%E5%85%89%E6%A3%8D%E8%8A%82/b/ref=amb_link_101691512_2?ie=UTF8&node=361165071"
                             target="_blank">直达链接</a></span>
                        </div>
                    </li>
                    </ul>

                    </div>








<!--hongbao-->

                    <div id="module_2378" class="hotlist items" style="background:url('') no-repeat 0 0;background-size: cover;background-position: center;"><h2><img src="/html/qmm1111/56387d10ebb3d2682.jpg" tppabs="http://eimg.quanmama.com/201511/03/56387d10ebb3d2682.jpg" alt="网购攻略" title="网购攻略"></h2>
                    <ul>
                        <%
                            int index = 0;
                            foreach (var item in Model)
                            {
                                if (index % 8 == 0) {
                                    %>
                                    <li class="aj-separator"></li>
                                    <%
                                }
                                Html.RenderPartial("~/Views/Shared/shuang1111.ascx", item);
                                index++;
                            }
                        %>
                    </ul><input type="hidden" name="elevator" value="网购攻略"></div>

                    <div id="module_2536" class="pure_code"><div class="mall-title"></div>
                    <div class="aj-separator"><img src="/html/blackFriday/564477ea0b593300.png" /></div>
<ul>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e93e2ce0733719.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e945a69aaf359.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e9488ce2418864.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e94e0442497307.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e95002d9b79070.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e950e69c541106.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e952f8e5ce5406.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e9542c24753870.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e955e5b9037975.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e956abab559383.png"></a></li>
    <li><a href="" target="_blank" rel="nofollow"><img src="/html/blackFriday/564e958a4c1c74606.png"></a></li>
    <li><a href="" target="_blank"><img src="/html/blackFriday/5652849b2a7cc878.png"></a></li>
</ul>
<div class="lucky"><a href="" target="_blank"><img src="/html/blackFriday/5638912149b4a5827.png"></a></div>
<div class="others">
    <div class="review"><a href="" target="_blank"><img src="/html/blackFriday/564eb8e7e02e96159.png"></a></div>
    <div class="more-act"><a href="" target="_blank"><img src="/html/blackFriday/564eb9af5c7d72501.png"></a></div>
</div><input type="hidden" name="elevator" value="会场直达"></div>


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
    <%--    <script>
        $('.banner h1').append('<img class="banner-logo" style="width:200px;" src="563037b0cbdbb8272.png" /><div class="countdowm" style="max-width: 750px; width: 100%; margin-left: -375px;"><img src="http://image1.juanlaoda.com/AdminImageUpload/2015111103737137.jpg" style="position: relative;bottom: 0;width: 100%"></div></div>');
        $('#module_2380>h2').after('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;"><img src="563886f482c8a8904.jpg"/*tpa=http://eimg.quanmama.com/201511/03/563886f482c8a8904.jpg*/ /></div>');
        $('#module_2382>h2').after('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;"><img src="56388cd3d8f106492.jpg"/*tpa=http://eimg.quanmama.com/201511/03/56388cd3d8f106492.jpg*/ /></div>');
        $('#module_2404>h2').after('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;"><img src="56388d9a9e946237.jpg"/*tpa=http://eimg.quanmama.com/201511/03/56388d9a9e946237.jpg*/ /></div>');
        $('#nav-lift').prepend('<img src="/html/qmm1111/5630a9bcb31f71046.png"/*tpa=http://eimg.quanmama.com/201510/28/5630a9bcb31f71046.png*/ />').append('<li scrollto="#"><a class="return-top" href="#">返回顶部</a></li>');
        $('.hotlist>h2').find('img').remove();
        $('#module_2410 .more span').html('更多活动');
        $('#module_2412 .more span').html('更多券码');
        $('#module_2404 .more span').html('更多国内精选');
        $('#module_2414 .more span').html('更多海淘精选');
        $('#module_2418 .more span').html('更多达人分享');

        var ddt = 0, dds = 0; hht = 0; hhs = 0; mmt = 0; mms = 0;
        function timer() {
            var ts = (new Date(2015, 10, 11, 0, 0, 0)) - (new Date());
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
        setInterval(timer, 1000);

    </script>--%>
    <script>
        $('.banner h1').append('<img class="banner-logo" src="5644484be67ae5685.png"/*tpa=http://eimg.smzdm.com/201511/12/5644484be67ae5685.png*/ /><div class="countdowm"><h3>距离黑五开始还有</h3><div><span class="time time-day-tens"></span><span class="time time-day-single"></span><span class="time-type time-type-day">天</span><span class="time time-hour-tens"></span><span class="time time-hour-single"></span><span class="time-type time-type-hour">小时</span><span class="time time-minute-tens"></span><span class="time time-minute-single"></span><span class="time-type time-type-minute">分钟</span></div></div>');
        var ddt = 0, dds = 0; hht = 0; hhs = 0; mmt = 0; mms = 0;
        function timer() {
            var ts = (new Date(2015, 10, 28, 13, 0, 0)) - (new Date());
            if (ts < 0) {
                clearInterval(tim);
                $('.countdowm').children().remove();
                $('.countdowm').css({ 'max-width': '750px', 'width': '100%' }).css({ 'margin-left': -($('.countdowm').width() / 2) }).append('<img src="564167db96da51277.png"/*tpa=http://eimg.smzdm.com/201511/10/564167db96da51277.png*/ style="position: relative;bottom: 0;width: 100%">');
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

        $('#module_2568 .more span').html('更多海淘精选');
        $('#module_2530 .more span').html('更多活动');
        $('#module_2532 .more span').html('更多众测');
        $('#module_2534 .more span').html('更多达人分享');

        $('#module_2518>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="56445d37e301b5662.png"/*tpa=http://eimg.smzdm.com/201511/12/56445d37e301b5662.png*/ style="max-width:1" /></div>');
        $('#module_2520>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="56445ea98c5e28517.png"/*tpa=http://eimg.smzdm.com/201511/12/56445ea98c5e28517.png*/ /></div>');
        $('#module_2522>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom:0;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="56446253ac71c1146.png"/*tpa=http://eimg.smzdm.com/201511/12/56446253ac71c1146.png*/ /></div>');
        $('#module_2522>h2').after('<div style="margin:0 auto;max-width:569px;width: 100%;text-align: center;margin-bottom: 30px;background:url(http://eimg.smzdm.com/201511/12/5644639dd92c8299.png) no-repeat top center;font-size:30px;line-height:30px;">值友专享</div>');
        $('#module_2568>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom:30px;background:url(http://eimg.smzdm.com/201511/12/5644639dd92c8299.png) no-repeat top center;font-size:30px;line-height:30px;">海淘精选</div>');
        $('#module_2526>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom:0;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="56446a9c5191e5223.png"/*tpa=http://eimg.smzdm.com/201511/12/56446a9c5191e5223.png*/ /></div>');
        $('#module_2526>h2').after('<div style="margin:0 auto;max-width:569px;width: 100%;text-align: center;margin-bottom: 30px;background:url(http://eimg.smzdm.com/201511/12/5644639dd92c8299.png) no-repeat top center;font-size:30px;line-height:30px;">最热活动</div>');
        $('#module_2530>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom:30px;background:url(http://eimg.smzdm.com/201511/12/5644639dd92c8299.png) no-repeat top center;font-size:30px;line-height:30px;">最新活动</div>');
        $('#module_2532>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="564473a84b6187340.png"/*tpa=http://eimg.smzdm.com/201511/12/564473a84b6187340.png*/ /></div>');
        $('#module_2534>h2').append('<div style="margin:0 auto;max-width:1050px;width: 100%;text-align: center;margin-bottom: 20px;background:url(http://eimg.smzdm.com/201511/12/56445d1bddb6e9868.png) top center"><img src="564474b81c3ad8819.png"/*tpa=http://eimg.smzdm.com/201511/12/564474b81c3ad8819.png*/ /></div>');

        $('#nav-lift').prepend('<img src="/html/blackFriday/5645adbb06d883388.png"/*tpa=http://eimg.smzdm.com/201511/13/5645adbb06d883388.png*/ style="position: absolute;left: -28px;top:-40px;width:165px;" />').append('<a class="return-top" href="#"><img src="/html/qmm1111/5645b3383f03c3983.png"/*tpa=http://eimg.smzdm.com/201511/13/5645b3383f03c3983.png*/ style="position: absolute;left: 58px;bottom: -62px;" /></a>');

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
                        src: "/html/blackFriday/56445d37e301b5662.png",
                        title: "海淘攻略"
                    },
                    {
                        src: "/html/blackFriday/56446253ac71c1146.png",
                        title: "必看促销"
                    },
                    {
                        src: "/html/blackFriday/56446a9c5191e5223.png",
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
