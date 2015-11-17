<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddPost.aspx.cs" Inherits="WebMvc.shouzhaoliu.Post.AddPost"
    ValidateRequest="false" %>

<%@ Import Namespace="System" %>
<%@ Import Namespace="Quanmama.Helper" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>添加优惠券new</title>
    <link rel="stylesheet" href="/css2/jquery-ui.css">
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://libs.baidu.com/jqueryui/1.10.2/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="/Ueditor/ueditor.config.js"></script>
    <script type="text/javascript" src="/Ueditor/ueditor.all.js"> </script>
    <link rel="Stylesheet" type="text/css" href="/js/bootstrap/css/bootstrap.min.css"/>
    <script type="text/javascript" src="/js/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/seajs/module/angular/angular.min.js"></script>
    <script type="text/javascript" src="/js/seajs/module/addPost/addPost.js"></script>
    <script type="text/javascript">
        function changeDate() {
            document.getElementById("tbEndTime").value = document.getElementById("nextdt").value;
        }

        function create_category(id, name, inherit) {
            var inheritCheckValue = " checked='checked' ";
            if (inherit == 0) {
                inheritCheckValue = ' ';
            }

            var inheritHtml = "<input type='checkbox' " + inheritCheckValue + " name='inherit_" + id + "' id='inherit_" + id + "'/><label>子类可继承</label>";

            $(function () {
                $("<div id=div_" + id + "><input type='checkbox' checked='checked' name='category_" + id + "' id='category_" + id + "'/><label>" + name + "</label>&nbsp;&nbsp;（" + inheritHtml + "）</div>").appendTo($('#category_area'));
            });
        }


        function create_brand(id, name) {
            $(function () {
                $("<div id=branddiv_" + id + "><input type='checkbox' checked='true' name='brand_" + id + "' id='brand_" + id + "'/><label>" + name + "</label></div>").appendTo($('#brand_area'));
            });
        }


        $(function () {
            $("#ddlCPSUnions").val('<%=CPSUnion %>');

            $("#category_input").autocomplete({
                source: '/ajax/getcategory.ashx',
                minLength: 1,
                select: function (event, ui) {
                    var id = ui.item.id;
                    var name = ui.item.name;
                    create_category(id, name, 1);
                },
                // optional (if other layers overlap autocomplete list)
                open: function (event, ui) {
                    $(".ui-autocomplete").css("z-index", 1000);
                }
            });

            $("#brand_input").autocomplete({
                source: '/ajax/getbrand.ashx',
                minLength: 1,
                select: function (event, ui) {
                    var id = ui.item.id;
                    var name = ui.item.name;
                    create_brand(id, name);
                },
                // optional (if other layers overlap autocomplete list)
                open: function (event, ui) {
                    $(".ui-autocomplete").css("z-index", 1000);
                }
            });

        });
        

        
    </script>
    <style type="text/css">
        #category_input
        {
            width: 359px;
        }
        
        #brand_input
        {
            width: 359px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server" ng-controller="formController">
    <div>
        <asp:Panel runat="server" Visible="false" GroupingText="添加结果" Width="570px" ID="panelResult">
            <p>
                <asp:Literal ID="litTopResult" runat="server"></asp:Literal>
                <br />
            </p>
        </asp:Panel>


        <asp:Panel ID="panelBaseInfo" GroupingText="一、基本信息填写（*）" Width="770px" runat="server">
            <div class="form-group clearfix">
                <label for="posttype" class="col-sm-2 control-label">
                    类型 : 
                </label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="posttype" runat="server" class="form-control" ></asp:DropDownList>
                </div>
            </div>
            <div ng-bind="test"></div>
            
            <div class="form-group clearfix">
                <label for="tbSite" class="col-sm-2 control-label"><span style="color: Red">1.</span>券网站域名：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbSite" runat="server" Text="" class="form-control" ng-model="tbSite"></asp:TextBox>
                    （* 必填，e.g.jumei.com）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbTitle" class="col-sm-2 control-label">
                    <span style="color: Red">2.</span>优惠券标题：
                </label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbTitle" runat="server" Text="" class="form-control" ng-model="tbTitle"></asp:TextBox>
                    （* 必填，e.g.京东优惠券满100元减10元）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbViceTitle" class="col-sm-2 control-label">
                    <span style="color: Red"></span>副标题：（可选，飘红的亮点）
                </label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbViceTitle" runat="server" Text="" class="form-control" ng-model="tbViceTitle"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="ddlPostType" class="col-sm-2 control-label">
                    <span style="color: Red">3.</span>Post优惠类型：
                </label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="ddlPostType" runat="server" class="form-control" ng-model="ddlPostType"></asp:DropDownList>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="ddlCouponType" class="col-sm-2 control-label">
                    <span style="color: Red">3.2</span>优惠券类型：
                </label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="ddlCouponType" runat="server" class="form-control" ng-model="ddlCouponType"></asp:DropDownList>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="ddlCPSUnions" class="col-sm-2 control-label">
                    <span style="color: Red">4.</span>优惠券联盟：
                </label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="ddlCPSUnions" runat="server" class="form-control" ng-model="ddlCPSUnions"></asp:DropDownList>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="ddlCountry" class="col-sm-2 control-label">
                    <span style="color: Red">5.</span>国家：
                </label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="ddlCountry" runat="server" class="form-control" ng-model="ddlCountry"></asp:DropDownList>
                </div>
            </div>
            
            <%--<p>
                <span style="color: Red">1.</span>券网站域名：<br />
                <asp:TextBox ID="tbSite" runat="server" Width="657px" Text="" Height="27px" ng-model=""></asp:TextBox>
                <br />
                （* 必填，e.g.jumei.com）</p>--%>
            <%--<p>
                <span style="color: Red">2.</span>优惠券标题：<br />
                <asp:TextBox ID="tbTitle" runat="server" Width="758px" Text="" Height="31px" ng-model=""></asp:TextBox><br />
                （* 必填，e.g.京东优惠券满100元减10元）</p>--%>
            <%--<p>
                <span style="color: Red"></span>副标题：（可选，飘红的亮点）<br />
                <asp:TextBox ID="tbViceTitle" runat="server" Width="758px" Text="" Height="21px" ng-model=""></asp:TextBox>
            </p>--%>
            <%--<p>
                <span style="color: Red">3.</span>Post优惠类型：<asp:DropDownList ID="ddlPostType" runat="server"
                    Height="30px" Width="298px" ng-model="">
                </asp:DropDownList>
            </p>--%>
            <%--<p>
                <span style="color: Red">3.2</span>优惠券类型：<asp:DropDownList ID="ddlCouponType" runat="server"
                    Height="30px" Width="298px" ng-model="">
                </asp:DropDownList>
            </p>--%>
            <%--<p>
                <span style="color: Red">4.</span>优惠券联盟：<asp:DropDownList ID="ddlCPSUnions" runat="server"
                    Height="30px" Width="298px" ng-model="">
                </asp:DropDownList>
            </p>--%>
            <%--<p>
                 <span style="color: Red">5.</span>国家：<asp:DropDownList ID="ddlCountry" runat="server"
                    Height="30px" Width="298px" ng-model="">
                </asp:DropDownList>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="Panel1" runat="server" GroupingText="设置类别" Width="570px">
            <div id="category_area">
            </div>
            <div style="padding: 10px;">
                <input type="text" name="keyword" id="category_input" style="width: 457px" pre=""
                    autocomplete="off" value="" ng-model="keyword"/>
            </div>
            <br />
        </asp:Panel>
        <asp:Panel ID="Panel2" runat="server" GroupingText="设置品牌" Width="570px">
            <div id="brand_area">
            </div>
            <div style="padding: 10px;">
                <input type="text" name="keyword" id="brand_input" style="width: 457px" pre="" autocomplete="off"
                    value="" ng-model="keyword"/>
            </div>
            <br />
        </asp:Panel>
        <asp:Panel ID="panelCouponDesc" GroupingText="二、优惠券说明（*）" Width="770px" runat="server">
            <p>
                <textarea rows="20" id="editor1" cols="155" name="desc" ng-model="editor1"></textarea>
                <br />
                （* 必填，使用规则介绍）</p>
            <div id="CouponDescContentDiv" style="display: none">
                <%=CouponDescContent %>
            </div>
            <script type="text/javascript">
                window.onload = function () {
                    //var myeditor = CKEDITOR.replace('editor1');

                    var myeditor = UE.getEditor('editor1');
                    myeditor.setData(document.getElementById("CouponDescContentDiv").innerHTML);
                };
            </script>

            <div class="form-group clearfix">
                <label for="tbImage" class="col-sm-2 control-label">插图模板:</label>
                <div class="col-sm-10">
                    <textarea style="height:80px;" name="temp" class="form-control"><a target="_blank" href="http://www.quanmama.com/t/goto.aspx?url=" rel="nofollow" ><img src="" width="690px" /></a></textarea>
                </div>
            </div>

            <%--<p>
                插图模板:<textarea rows="1" cols="100" name="temp"><a target="_blank" href="http://www.quanmama.com/t/goto.aspx?url=" rel="nofollow" ><img src="" width="690px" /></a></textarea>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="panelCodeList" GroupingText="三、券代码列表（*）" Width="770px" runat="server">
            <div class="form-group clearfix">
                <div class="col-sm-12">
                    <asp:TextBox ID="tbCouponCodeList" runat="server" Width="628px" Text="" Height="200px" TextMode="MultiLine" class="form-control" ng-model="tbCouponCodeList"></asp:TextBox>
                    (*如果是收录的券，这里填写链接地址即可，否则一行一张券代码)
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbLink" class="col-sm-2 control-label">链接：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbLink" runat="server" Text="" class="form-control" ng-model="tbLink"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbImage" class="col-sm-2 control-label">图片：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbImage" runat="server" Text="" class="form-control" ng-model="tbImage"></asp:TextBox>
                </div>
            </div>

           <%-- <p>
                <asp:TextBox ID="tbCouponCodeList" runat="server" Width="628px" Text="" Height="200px"
                    TextMode="MultiLine" ng-model=""></asp:TextBox>
                <br />
                (*如果是收录的券，这里填写链接地址即可，否则一行一张券代码)
            </p>--%>
            <%--<hr />
            <p>
                链接：<asp:TextBox ID="tbLink" runat="server" Width="582px" Text="" Height="28px" ng-model=""></asp:TextBox>
            </p>--%>
           <%-- <p>
                图片：<asp:TextBox ID="tbImage" runat="server" Width="582px" Text="" Height="28px" ng-model=""></asp:TextBox>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="panelTime" GroupingText="四、时间设置（*）" Width="770px" runat="server">
            <div class="form-group clearfix">
                <label for="tbEndTime" class="col-sm-2 control-label">券结束时间：</label>
                <div class="col-sm-5">
                    <asp:TextBox ID="tbEndTime" runat="server" Text="" class="form-control" ng-model="tbEndTime"></asp:TextBox>
                </div>
                <div class="col-sm-4">
                    （* 必填，默认为23:59:59） 时间不确定？
                </div>
                <div class="col-sm-1">
                    <asp:TextBox ID="tbUnsureEndTime" runat="server" Text="0" class="form-control" ng-model="tbUnsureEndTime"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbBeginTime" class="col-sm-2 control-label">券生效时间：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbBeginTime" runat="server" Text="" class="form-control" ng-model="tbBeginTime"></asp:TextBox>
                    （* 必填，默认为0:0:0）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbPublishTime" class="col-sm-2 control-label">券添加时间：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbPublishTime" runat="server" Text="" class="form-control" ng-model="tbPublishTime"></asp:TextBox>
                    （# 一般无需更改）
                </div>
            </div>

            <%--<p>
                券结束时间：<asp:TextBox ID="tbEndTime" runat="server" Width="164px" Text="" Height="41px" ng-model=""></asp:TextBox>
                （* 必填，默认为23:59:59） 时间不确定？<asp:TextBox ID="tbUnsureEndTime" runat="server" Width="22px"
                    Text="0" Height="28px" ng-model=""></asp:TextBox>
            </p>--%>
            <%--<p>
                券生效时间：<asp:TextBox ID="tbBeginTime" runat="server" Width="164px" Text="" Height="41px" ng-model=""></asp:TextBox>
                （* 必填，默认为0:0:0）</p>--%>
            <%--<p>
                券添加时间：<asp:TextBox ID="tbPublishTime" runat="server" Width="164px" Text="" Height="41px" ng-model=""></asp:TextBox>
                （# 一般无需更改）</p>--%>
        </asp:Panel>
        <asp:Panel ID="panelDiscount" GroupingText="五、满减额度设置（*）" Width="640px" runat="server">
            <div class="form-group clearfix">
                <label for="tbDiscountX" class="col-sm-2 control-label">满多少：</label>
                <div class="col-sm-3">
                    <asp:TextBox ID="tbDiscountX" runat="server" class="form-control" Text="0" ng-model="tbDiscountX"></asp:TextBox>
                </div>
                <label for="tbDiscountY" class="col-sm-2 control-label">减多少：</label>
                <div class="col-sm-4">
                    <asp:TextBox ID="tbDiscountY" runat="server"  Text="0" class="form-control" ng-model="tbDiscountY"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbDiscount" class="col-sm-2 control-label">自定制：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbDiscount" runat="server" Text="" class="form-control" ng-model="tbDiscount"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbDiscount" class="col-sm-2 control-label">标签：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbTags" runat="server" Text="" class="form-control" ng-model="tbTags"></asp:TextBox>
                </div>
            </div>

            <%--<p>
                满多少：<asp:TextBox ID="tbDiscountX" runat="server" Width="162px" Text="0" Height="28px" ng-model=""></asp:TextBox>
            </p>--%>
            <%--<p>
                减多少：<asp:TextBox ID="tbDiscountY" runat="server" Width="198px" Text="0" Height="27px" ng-model=""></asp:TextBox>
            </p>--%>
            <%--<p>
                自定制：<asp:TextBox ID="tbDiscount" runat="server" Width="196px" Text="" Height="27px" ng-model=""></asp:TextBox>
            </p>--%>
           <%-- <p>
                标签：<asp:TextBox ID="tbTags" runat="server" Width="412px" Text="" Height="28px" ng-model=""></asp:TextBox>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="panelLingQu" GroupingText="六、领取量设置（*）" Width="640px" runat="server">
            <div class="form-group clearfix">
                <label for="tbUserDailyDrawLimit" class="col-sm-3 control-label">每人每天最多可以领取：</label>
                <div class="col-sm-9">
                    <asp:TextBox ID="tbUserDailyDrawLimit" runat="server" class="form-control" Text="2" ng-model="tbUserDailyDrawLimit"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbUserDrawLimit" class="col-sm-3 control-label">每人最多可以领取：</label>
                <div class="col-sm-9">
                    <asp:TextBox ID="tbUserDrawLimit" runat="server" class="form-control" Text="3" ng-model="tbUserDrawLimit"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbDailyDrawLimit" class="col-sm-3 control-label">每天最多可以领取：</label>
                <div class="col-sm-9">
                    <asp:TextBox ID="tbDailyDrawLimit" runat="server" class="form-control" Text="2000" ng-model="tbDailyDrawLimit"></asp:TextBox>
                </div>
            </div>
           <%-- <p>
                每人每天最多可以领取：<asp:TextBox ID="tbUserDailyDrawLimit" runat="server" Width="162px" Text="2"
                    Height="28px"></asp:TextBox>
            </p>--%>
            <%--<p>
                每人最多可以领取：<asp:TextBox ID="tbUserDrawLimit" runat="server" Width="198px" Text="3"
                    Height="27px"></asp:TextBox>
            </p>--%>
            <%--<p>
                每天最多可以领取：<asp:TextBox ID="tbDailyDrawLimit" runat="server" Height="27px" Text="2000"
                    Width="196px"></asp:TextBox>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="panelPrice" GroupingText="七、价格设置" Width="640px" runat="server">
            <div class="form-group clearfix">
                <label for="tbBuyFee" class="col-sm-2 control-label">多少钱一张：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbBuyFee" runat="server" class="form-control" Text="0.0" ng-model="tbBuyFee"></asp:TextBox>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="ddlPrepayType" class="col-sm-2 control-label">支付方式：</label>
                <div class="col-sm-10">
                    <asp:DropDownList ID="ddlPrepayType" runat="server" class="form-control" ng-model="ddlPrepayType"></asp:DropDownList>
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="tbPoint" class="col-sm-2 control-label">多少积分一张：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbPoint" runat="server" Text="0" class="form-control" ng-model="tbPoint"></asp:TextBox>
                </div>
            </div>

            <%--<p>
                多少钱一张：<asp:TextBox ID="tbBuyFee" runat="server" Width="162px" Text="0.0" Height="28px"></asp:TextBox>
            </p>--%>
            <%--<p>
                支付方式：<asp:DropDownList ID="ddlPrepayType" runat="server" Height="30px" Width="100px">
                </asp:DropDownList>
            </p>--%>
            <%--<p>
                多少积分一张：<asp:TextBox ID="tbPoint" runat="server" Width="198px" Text="0" Height="27px"></asp:TextBox>
            </p>--%>
        </asp:Panel>
        <asp:Panel ID="panelSetting" GroupingText="八、常用的设置（*）" Width="640px" runat="server">
            <div class="form-group clearfix">
                <label for="TextBox1" class="col-sm-2 control-label">券排序指数：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbRankIndex" runat="server" class="form-control" Text="0" ng-model="tbRankIndex"></asp:TextBox>
                    （值越大越靠前）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="TextBox1" class="col-sm-2 control-label">需要验证码：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbVerifyCode" runat="server" class="form-control" Text="0" ng-model="tbVerifyCode"></asp:TextBox>
                    （0表示不需要,1表示需要,2是品牌验证码）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="TextBox1" class="col-sm-2 control-label">是否账号：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbIsAccount" runat="server"  Text="0" class="form-control" ng-model="tbIsAccount"></asp:TextBox>
                    （0表示正常券,1表示提供的是账号）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="TextBox1" class="col-sm-2 control-label">已领代码是否显示：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbDisplay" runat="server"  Text="0" class="form-control" ng-model="tbDisplay"></asp:TextBox>
                    （0表示显示,1表示保密不显示）
                </div>
            </div>
            <div class="form-group clearfix">
                <label for="TextBox1" class="col-sm-2 control-label">单IP领券限制：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbIPLimit" runat="server" class="form-control" Text="0" ng-model="tbIPLimit"></asp:TextBox>
                    （0：不限制,其它数字：单ip可领数量）
                </div>
            </div>

            <%--<p>
                券排序指数：<asp:TextBox ID="tbRankIndex" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （值越大越靠前）
            </p>--%>
            <%--<p>
                需要验证码：<asp:TextBox ID="tbVerifyCode" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示不需要,1表示需要,2是品牌验证码）
            </p>--%>
            <%--<p>
                是否账号：<asp:TextBox ID="tbIsAccount" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示正常券,1表示提供的是账号）
            </p>--%>
            <%--<p>
                已领代码是否显示：<asp:TextBox ID="tbDisplay" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示显示,1表示保密不显示）
            </p>--%>
            <%--<p>
                单IP领券限制：<asp:TextBox ID="tbIPLimit" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0：不限制,其它数字：单ip可领数量）</p>--%>
        </asp:Panel>
        <asp:Panel ID="panelOption" GroupingText="九、高级选项，保持默认值即可" Width="640px" runat="server">
            <div class="form-group">
                <label for="TextBox1" class="col-sm-2 control-label">url需要加密：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbGuid" runat="server" class="form-control" Text="0" ng-model="tbGuid"></asp:TextBox>
                    （0表示正常url,1表示券编号为字符串代码）
                </div>
            </div>
            <div class="form-group">
                <label for="TextBox1" class="col-sm-2 control-label">券出现时机：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbDisplayFlag" runat="server" Text="0" class="form-control" ng-model="tbDisplayFlag"></asp:TextBox>
                    （0表示正常,1表示白天显示,-1表示晚上和周末显示）
                </div>
            </div>
            <div class="form-group">
                <label for="TextBox1" class="col-sm-2 control-label">只允许微信端领取：</label>
                <div class="col-sm-10">
                    <asp:TextBox ID="tbWeixinLimit" runat="server" Text="0" class="form-control" ng-model="tbWeixinLimit"></asp:TextBox>
                    （0表示没限制,1表示只允许微信端领取,其它值待定）
                </div>
            </div>

            <%--<p>
                url需要加密：<asp:TextBox ID="tbGuid" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示正常url,1表示券编号为字符串代码）
            </p>--%>
            <%--<p>
                券出现时机：<asp:TextBox ID="tbDisplayFlag" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示正常,1表示白天显示,-1表示晚上和周末显示）
            </p>--%>
            <%--<p>
                只允许微信端领取：<asp:TextBox ID="tbWeixinLimit" runat="server" Width="162px" Text="0" Height="28px"></asp:TextBox>
                （0表示没限制,1表示只允许微信端领取,其它值待定）
            </p>--%>
        </asp:Panel>
    </div>
    <p>
        <asp:Button ID="btnSave" runat="server" class="btn btn-primary" Height="60px" OnClick="Button1_Click" Style="margin-top: 33px"
            Text="保存" Width="640px" />
    </p>
    <br />
    <asp:Label ID="lblError" runat="server" Text=""></asp:Label>
    <br />
    <asp:Literal ID="litLink" runat="server"></asp:Literal>
    <br />
    </form>
</body>
</html>
