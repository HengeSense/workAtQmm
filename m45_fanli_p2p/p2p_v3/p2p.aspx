<%@ Page Title="" Language="C#" Inherits="System.Web.Mvc.ViewPage<List<Quanmama.Models.Post>>" %>

<%@ Import Namespace="Quanmama.Models" %>
<%@ Import Namespace="Quanmama.Helper" %>

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>ȯ�������</title>
  <meta name="keywords" content="">
  <meta name="description" content="11��25�� ���Ҳȯ����">
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
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com">ȯ������ҳ</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/new">
                    �Ż�ȯ</a> 
                <a class="aj-nav-a" target="_blank" href="http://zhi.quanmama.com/">����ֵ����</a> 
                <a class="aj-nav-a" target="_blank" href="http://faxian.quanmama.com/">����</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/haitao">
                            ����</a> 
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/newkfc">�ϵ»��Ż�ȯ</a>
                <a class="aj-nav-a" target="_blank" href="http://www.quanmama.com/user/coupons">�ҵ�ȯ����</a>
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
   <!--���λ200326-->
   <div class="container">
    <div class="top-banner">
     <a href="#J_rule" class="go-rule-button event-smooth">�����</a>
     <img src="/html/p2p_v3/2015112019394391218_v2.png" alt="">
     <!--���λ200327-->
     <div id="J_main_cd_wrap" class="money p2p-countdown" data-start="1448380800" data-end="1448467199" style="display: none;">
      ����������
      <span id="J_countdown" class="cd-time"></span>
     </div>
    </div>
   </div>
   <div class="container-bg" style="background:url(/html/p2p_v3/2015112020394526101.jpg) center top no-repeat; background-color:#ffc452;" "="">
    <!--���λ200328-->
    <!--200334-->
    <div class="container">
     <img src="/html/p2p_v3/2015112020411492549.jpg" alt="">
    </div>
    <!--���λ200329-->
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

    <!--���λ200332-->
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
    <!--���λ200331-->
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

   <!--���λ200334-->
   <div id="J_rule" class="rule-wrap yahei" style="background:#ffc452;">
    <!--���λ200334 ����1-->
    <div class="container">
     <h3><em>�����</em></h3>
     <ol>
      <li><i>1</i>�ʱ�䣺2015��11��25��0��~23��59��59�룻</li>
      <li><i>2</i>��ڼ䣬ȯ�����û�ͨ���ҳ����������վע�ᣬ����11��25����Ͷ�ɹ����״�Ͷ�ʡ�5000Ԫ��Ͷ�ʽ������������ȯ������ȯ�������ɻ��ȯ���轱����</li>
      <li><i>3</i>����11��25��Ͷ����ɺ��ȯ������д���������վע����ֻ��ţ�����ȯ���轫�޷�˳�����ţ�</li>
      <li><i>4</i>ȯ������ֻ��Իҳÿ����վ���׵������轱����ÿ����վ�޽�һ�Σ�</li>
      <li><i>5</i>ȯ���跢��ʱ�䣺12��9�շ�����Ͷ������ÿ�������վ�Żݲ�ͬ������ҳ�棻</li>
      <li><i>6</i>ͬһ�����վ��ͬһ���û�������һ�ν�����ͬһȯ������id��ͬһ�����վid��ͬһ�ֻ��Ž��϶�Ϊͬһ�û�����</li>
      <li><i>7</i>�κβ�����ȯ�������û�ʹ���ֲ�ȹ�����µ���Ϊ�������ע�ᣬ����ˢ������ҵ��¸�������������ߵȣ�һ�������̼���Ȩ�۳���ڼ�����ȯ���裻</li>
      <li><i>8</i>ȯ�����������û���ȡ�κ������ѣ������û�������Ͷ����Ϊ��ͨ��ȯ��������ת���ں���ƽ̨�Ͻ��У��κ�Ͷ�ʽ�����Ϊ����ȯ�������޹ء�ȯ�������ڴ˻���֣����ʾ���κ�Ͷ�ʶ����з��գ����û�Ͷ��ǰ���ؿ��Ǹ�ƽ̨���ã�Ͷ����Ŀ����ʵ�Կ����Ե����ء��û�����Ͷ�ʷ������飬��͸�ƽ̨���й�ͨ���档</li>
     </ol>
    </div>
   </div>
   <!--���λ200334-->
   <div class="p2p-tips yahei" style="background:#ffc452;">
    <!--���λ200335 ����1-->
    <div class="container">
     <h3>*��ܰ��ʾ��</h3> 
     <p>�г��з��գ�Ͷ���������Ͷ����Ͷ�ʲ�ͬ����Ʋ�Ʒ����ò�ͬ������Ԥ�ڣ�Ҳ���е���ͬ�̶ȵķ��ա�һ����˵����Ʋ�Ʒ������Ԥ��Խ�ߣ�Ͷ���߿��ܳе��ķ���Խ��Ͷ����Ӧ�������Ķ���Ʋ�Ʒ�����˵�����˽��Ʒ�ص㣬����������Ͷ��Ŀ�ġ�Ͷ�����ޡ�Ͷ�ʾ��顢�ʲ�״�����ж��Ƿ��Ͷ���˵ķ��ճ�����������Ӧ��</p>
    </div>
   </div>
  </div>
  <div id="J_fixed_bottom" class="fixed-bottom-wrap yahei" style="display:none;">
   <div class="container">
    <p class="title"><span></span>�µ������µ�����д�ֻ���ȯ������ܵ���Ŷ��</p>
    <div class="p2p-message clearfix">
     <input id="J_mobile_input" class="form-tel" type="tel" name="mobile" value="" maxlength="11" placeholder="����д11λ�ֻ�����">
     <p class="form-error"><span></span>�ֻ���Ҫ��ע�������վʱ��д��һ��</p>
     <a id="J_submit_phone" href="javascript:;" class="get-button">��Ҫȯ����&nbsp;&gt;</a>
    </div>
   </div>
  </div>
  <div id="J_notStart_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">��</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="11��25���µ����ж���ȯ����Ŷ��">
    <p class="form-title">11��25���µ����ж���ȯ����Ŷ��</p>
    <a class="J_go_btn btn btn-l btn-green close" href="javascript:;" target="_blank">��ȥ����</a>
   </div>
  </div>
  <div id="J_start_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">��</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="�ǵû�����ȯ����Ŷ��">
    <p class="form-title">�ǵû�����ȯ����Ŷ��<br><span id="J_product_tips" class="red" style="font-size:20px;"></span></p>
    <a class="J_go_btn J_btn_phonetips btn btn-l btn-green close" href="javascript:;" target="_blank">��������</a>
   </div>
  </div>
  <div id="J_success_pop" class="J_p2p_pop p2p-pop yahei">
   <a href="javascript:;" class="btn-close simsun close">��</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="��ȡ�ɹ�">
    <p class="form-title">�ύ�ɹ�<br>Ԥ��ȯ����12��9��֮ǰ����</p>
    <a class="J_go_btn btn btn-l btn-green close" href="javascript:;">ȷ&nbsp;��</a>
   </div>
  </div>
  <div id="J_bindphone_tips" class="J_p2p_pop p2p-pop bindphone-tips yahei">
   <a id="J_phone_close" href="javascript:;" class="btn-close simsun close">��</a>
   <div class="p2p-pop-content">
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="��ȡ�ɹ�">
    <p class="form-title">�µ����𣿼ǵ���дͶ���ֻ���Ŷ��<br>����ҳ��ײ���дŶ��</p>
    <img class="lazy" src="/html/p2p_v3/spacer.png" alt="��ͷ">
   </div>
  </div>
  
  <div id="J_right_sidebar" class="sidebar-r yahei" style="display: none;">
   <img src="/html/p2p_v3/2015111917353495121.png" alt="���Ҳȯ����">
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/201511191736123106.png" alt="���Ҳȯ����"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/201511191738079761.png" alt="���Ҳȯ����"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015112010104078846.png" alt="���Ҳȯ����"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015111917384789956.png" alt="���Ҳȯ����"></a>
   <a href="javascript:;" class="smooth"><img src="/html/p2p_v3/2015111917391028883.png" alt="���Ҳȯ����"></a>
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
            <a href="/about" target="_blank">����ȯ����</a> <a href="http://www.quanmama.com/quan_vipshop" target="_blank">ΨƷ���Ż�ȯ</a> <a href="http://www.quanmama.com/quan_360buy" target="_blank">
                    �����Ż�ȯ</a> <a href="http://www.quanmama.com/quan_jumei" target="_blank">������Ʒ�Ż�ȯ</a>
            <a href="http://www.quanmama.com/newkfc" target="_blank">�ϵ»������Ż�ȯ</a> <a href="http://zhi.quanmama.com/" target="_blank">����ֵ����</a> <a href="http://faxian.quanmama.com/" target="_blank">����Ƶ��</a>
            <a href="/contact" target="_blank">��ϵ����</a><a href="/faq" target="_blank">��������</a>
            <a href="/joinus" target="_blank">��������</a>
        </div>
        <div class="info">
            ? copyright 2010-2015 ȯ�����Ż�ȯ��. All rights reserved.
        </div>
    </div>
</footer>
  <div id="backtop">
   <a href="javascript:;" class="side-feedback" target="_blank" style="display:none;"><i></i>�������</a>
   <a id="btn-backtop" href="javascript:;" class="ht">���ض���</a>
  </div>
 </body>
</html>
