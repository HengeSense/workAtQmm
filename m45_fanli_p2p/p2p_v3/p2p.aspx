<%@ Page Title="" Language="C#" Inherits="System.Web.Mvc.ViewPage<List<Quanmama.Models.Post>>" %>

<%@ Import Namespace="Quanmama.Models" %>
<%@ Import Namespace="Quanmama.Helper" %>

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>券妈妈理财</title>
  <meta name="keywords" content="">
  <meta name="description" content="11月25日 理财也券妈妈">
  <link rel="shortcut icon" href="http://www.quanmama.com/images/qmm.ico">
  <link rel="apple-touch-icon" href="http://www.fanli.com/apple-touch-icon.png">
  <link href="/html/p2p_v3/event-css.css-201511253_5393251359.css" rel="stylesheet">
  <link href="/html/p2p_v3/demo.css?v=20151203" rel="stylesheet">
</head>
 <body style="padding-top:32px;">
<header style='width:100%;height:32px;position:fixed;top:0;left:0;z-index:1000;'>
    <div class="navBarWrap" style="background-color:#333;">
        <!--navBar-->
        <style>
        .aj-nav-a
        {
            margin-right: 20px;
            font-family:"Helvetica Neue",Helvetica,Microsoft Yahei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;
        }
        .navBar {
            padding: 0;
            height: 32px;
            min-height: 32px;
            max-width: 1050px;
            margin: 0 auto;
            line-height: 32px;
            border: 0;
            background: #333;
            font-size: 12px
        }

        .navBar a {
            color: #eee;
            width: auto;
            display: inline-block;
            position: relative;
            text-decoration: none
        }

        .navBar a .new {
            display: inline-block;
            position: absolute;
            right: 4px;
            top: 0;
            width: 18px;
            height: 15px
        }

        .navBar a .hot {
            display: inline-block;
            position: absolute;
            right: 4px;
            top: 0;
            width: 18px;
            height: 15px
        }

        .navBar a .new img {
            width: 18px;
            height: 15px;
            vertical-align: top
        }

        .navBar a .hot img {
            width: 18px;
            height: 15px;
            vertical-align: top
        }

        .navBar .navbar-collapse {
            background: #333;
            width: 75%;
            float: left
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

  <div class="container-bg clearfix" style="background:url(/html/p2p_v3/201511201939673010_v2.png) center top no-repeat; background-color:#ffc452;">
   <!--广告位200326-->
   <div class="container">
    <div class="top-banner">
     <a href="#J_rule" class="go-rule-button event-smooth">活动规则</a>
     <img src="/html/p2p_v3/2015112019394391218_v2.png" alt="">
     <!--广告位200327-->
     <div id="J_main_cd_wrap" class="money p2p-countdown" data-start="1448380800" data-end="1448467199" style="display: none;">
      距活动结束还有
      <span id="J_countdown" class="cd-time"></span>
     </div>
    </div>
   </div>
   <div class="container-bg" style="background:url(/html/p2p_v3/2015112020394526101.jpg) center top no-repeat; background-color:#ffc452;" "="">
    <!--广告位200328-->
    <!--200334-->
    <div class="container">
     <img src="/html/p2p_v3/2015112020411492549.jpg" alt="">
    </div>
    <!--广告位200329-->
    <div id="product_1" class="container J_product_box" data-tips="">
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112420305456776_v3.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112017332622870_v2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112017333795802_v4.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112018124420487_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112018152256432_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/201511241193235434_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/nwd_3_4.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/2015112018164066470.jpg" alt=""></a>
     <a class="J_link" href="javascript:;"><img src="/html/p2p_v3/201511201738348747.jpg" alt=""></a>
    </div>

    <!--广告位200332-->
    <div id="product_2" class="container J_product_box" data-tips="">
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xhh_1.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xhh_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xhh_3_0.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xxh3.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xhh3_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xhh3_3.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/2015112018164066470.jpg" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/201511201738348747.jpg" alt=""></a>
    </div>
    <!--广告位200331-->
    <div id="product_3" class="container J_product_box" data-tips="">
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_1.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_3_0.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_3_1.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_3_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/jxw_3_3.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/2015112018164066470.jpg" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/201511201738348747.jpg" alt=""></a>
    </div>
   </div>
   <div id="Div1" class="container J_product_box" data-tips="">
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_1.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_3_0.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_3_1.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_3_2.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_3_3.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/xnzx_3_4.png" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/2015112018164066470.jpg" alt=""></a>
     <a class="J_link" href="javascript:;"><img class="lazy" src="/html/p2p_v3/201511201738348747.jpg" alt=""></a>
    </div>
   </div>

   <!--广告位200334-->
   <div id="J_rule" class="rule-wrap yahei" style="background:#ffc452;">
    <!--广告位200334 属性1-->
    <div class="container">
     <h3><em>活动规则</em></h3>
     <ol>
      <li><i>1</i>活动时间：2015年11月25日0点~23点59分59秒；</li>
      <li><i>2</i>活动期间，券妈妈用户通过活动页面完成理财网站注册，并于11月25日首投成功（首次投资≥5000元，投资金额不包含红包、礼券、抵用券），即可获得券妈妈奖励；</li>
      <li><i>3</i>请于11月25日投资完成后回券妈妈填写您在理财网站注册的手机号，否则券妈妈将无法顺利发放；</li>
      <li><i>4</i>券妈妈网只针对活动页每个网站“首单”给予奖励，每个网站限奖一次；</li>
      <li><i>5</i>券妈妈发放时间：12月9日发放首投奖励，每个理财网站优惠不同，详见活动页面；</li>
      <li><i>6</i>同一理财网站，同一个用户限享受一次奖励（同一券妈妈网id、同一理财网站id、同一手机号皆认定为同一用户）；</li>
      <li><i>7</i>任何不符合券妈妈网用户使用手册等规则的下单行为，如恶意注册，故意刷量，商业贿赂，非正常消费者等，一经发现商家有权扣除活动期间所有券妈妈；</li>
      <li><i>8</i>券妈妈网不向用户收取任何手续费，并且用户的所有投资行为均通过券妈妈网跳转后在合作平台上进行，任何投资交易行为均与券妈妈网无关。券妈妈网在此还是郑重提示，任何投资都具有风险，请用户投资前慎重考虑该平台信用，投资项目的真实性可行性等因素。用户如因投资发生争议，请和该平台进行沟通交涉。</li>
     </ol>
    </div>
   </div>
   <!--广告位200334-->
   <div class="p2p-tips yahei" style="background:#ffc452;">
    <!--广告位200335 属性1-->
    <div class="container">
     <h3>*温馨提示：</h3> 
     <p>市场有风险，投资需谨慎。投资者投资不同的理财产品将获得不同的收益预期，也将承担不同程度的风险。一般来说，理财产品的收益预期越高，投资者可能承担的风险越大。投资人应当认真阅读理财产品的相关说明，了解产品特点，并根据自身投资目的、投资期限、投资经验、资产状况等判断是否和投资人的风险承受能力相适应。</p>
    </div>
   </div>
  </div>
  <div id="J_fixed_bottom" class="fixed-bottom-wrap yahei" style="display:none;">
   <div class="container">
    <p class="title"><span></span>下单了吗？下单后填写手机号券妈妈才能到账哦！</p>
    <div class="p2p-message clearfix">
     <input id="J_mobile_input" class="form-tel" type="tel" name="mobile" value="" maxlength="11" placeholder="请填写11位手机号码">
     <p class="form-error"><span></span>手机号要与注册理财网站时填写的一致</p>
     <a id="J_submit_phone" href="javascript:;" class="get-button">我要券妈妈&nbsp;&gt;</a>
    </div>
   </div>
  </div>
  <div id="J_notStart_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">×</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="11月25日下单才有额外券妈妈哦！">
    <p class="form-title">11月25日下单才有额外券妈妈哦！</p>
    <a class="J_go_btn btn btn-l btn-green close" href="javascript:;" target="_blank">先去看看</a>
   </div>
  </div>
  <div id="J_start_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">×</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="记得回来拿券妈妈哦！">
    <p class="form-title">记得回来拿券妈妈哦！<br><span id="J_product_tips" class="red" style="font-size:20px;"></span></p>
    <a class="J_go_btn J_btn_phonetips btn btn-l btn-green close" href="javascript:;" target="_blank">立即购买</a>
   </div>
  </div>
  <div id="J_success_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">×</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="领取成功">
    <p class="form-title">提交成功<br>预计券妈妈12月9日之前到账</p>
    <a class="J_go_btn btn btn-l btn-green close" href="javascript:;">确&nbsp;定</a>
   </div>
  </div>
  <div id="J_bindphone_tips" class="J_p2p_pop p2p-pop bindphone-tips yahei">
   <a id="J_phone_close" href="javascript:;" class="btn-close simsun close">×</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="领取成功">
    <p class="form-title">下单了吗？记得填写投资手机号哦！<br>（在页面底部填写哦）</p>
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="箭头">
   </div>
  </div>
  
  <div id="J_right_sidebar" class="sidebar-r yahei" style="display: none;">
   <img src="/html/p2p_v3/2015111917353495121.png" alt="理财也券妈妈">
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/201511191736123106.png" alt="理财也券妈妈"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/201511191738079761.png" alt="理财也券妈妈"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015112010104078846.png" alt="理财也券妈妈"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015111917384789956.png" alt="理财也券妈妈"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015111917391028883.png" alt="理财也券妈妈"></a>
  </div>
<footer class="footerWrap" id="footer">
<style>
footer {
    background-color: #333;
    width: 100%;
    font-size: 12px
}

.footer {
    max-width: 1050px;
    margin: 0 auto;
    padding: 40px 15px
}

.footerTop {
    border-bottom: 1px quanmama #3d3d3d;
    padding-bottom: 40px;
    margin-bottom: 40px
}

.footerTop a {
    color: #ccc;
    padding-right: 30px;
    white-space: nowrap
}

.footerTop a.sitemap {
    padding-right: 60px;
    border-right: 1px quanmama #4d4d4d;
    margin-right: 60px
}

.footer a:hover {
    color: #fff
}

.footerLink {
    margin-bottom: 40px
}

.footerLink .linkTitle {
    font-size: 14px;
    color: #999;
    font-weight: bold;
    margin-bottom: 10px
}

.footerLink ul li {
    margin-left: 0;
    display: inline
}

.footerLink ul li a {
    color: #999;
    display: inline-block;
    padding-right: 30px;
    line-height: 24px
}

.footerLink ul li a:hover {
    color: #fff
}

.footerLink a {
    color: #999
}

.footer .info {
    color: #999;
    line-height: 20px
}

#footer_fixed .footer {
    padding: 20px 0;
    height: 40px;
    overflow: hidden
}

#footer_fixed .footerTop {
    border: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 15px
}
#aj-footer
{
    border:none!important;
    font-family:"Helvetica Neue",Helvetica,Microsoft Yahei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;
    }
#aj-footer a
{
    color:#ccc!important;
    }

</style>
    <div id='aj-footer' class="footer" style="background-color:#333;color:#ccc;">
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
  <div id="backtop">
   <a href="javascript:;" class="side-feedback" target="_blank" style="display:none;"><i></i>意见反馈</a>
   <a id="btn-backtop" href="javascript:;" class="ht">返回顶部</a>
  </div>
 </body>
</html>
