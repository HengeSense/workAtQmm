<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Mobile.Master" Inherits="System.Web.Mvc.ViewPage<Quanmama.Models.YouhuiQueryResult>" %>

<%@ Import Namespace="Quanmama.Models" %>
<%@ Import Namespace="Quanmama.Helper" %>
<%@ Import Namespace="System" %>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
    <title>
        <%=Model._OurCategory.CategoryName%>优惠券、促销优惠活动、值得买单品_券妈妈</title>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div id="aj-shop-index-page">
        <div class="aj-nav">
            <ul class="aj-nav-ul">
                <li class="aj-li aj-select" data-params="posttype=0;page=1;"  style="width: 20%;">全部</li>
                <li class="aj-li" data-params="posttype=3;page=1;" style="width: 20%;">优惠券</li>
                <li class="aj-li" data-params="posttype=14;page=1;" style="width: 20%;">优惠活动</li>
                <li class="aj-li" data-params="posttype=15;page=1;" style="width: 20%;">单品</li>
                <li class="aj-li" data-params="posttype=1;page=1;" style="width: 20%;">发现</li>
            </ul>
        </div>
        <div class="aj-sort">
            <ul class="aj-so-ul">
                <li class="aj-s-u-li aj-li-js aj-select" data-params="sort=1;page=1;"><span class="aj-choice-name">
                    最新</span> <span class="qmm-icon-clock"></span></li>
                <li class="aj-s-u-li aj-li-js " data-params="sort=2;page=1;"><span class="aj-choice-name">
                    最热</span> <span class="qmm-icon-fire"></span></li>
                <li aj-for="aj-s-b-f-filter" class="aj-s-u-li aj-s-u-filter aj-has-block"><span class="aj-choice-name">
                    筛选</span> <span class="qmm-icon-iconfont-sort"></span></li>
                <li class="aj-s-u-li aj-li-show-type"><span class="aj-choice-name">展示</span> <span
                    class="qmm-icon-view_list"></span></li>
            </ul>
            <div class="aj-s-b-wrap">
                <!-- aj-s-b 对应导航的一个(className有aj-has-block的)li -->
                <div class="aj-s-b aj-s-b-f-filter">
                    <div class="aj-s-left">
                        <div class="aj-s-l-wrap">
                            <ul class="aj-ul">
                                <li class="aj-li aj-has-block aj-select"><span class="qmm-icon-price-tag"></span>类别
                                    <span class="aj-choice"></span></li>
                            </ul>
                        </div>
                        <!--<div class="aj-btns-wrap">-->
                        <!--<div class="aj-btn aj-confirm">确定</div>-->
                        <!--<div class="aj-btn aj-quxiao">取消</div>-->
                        <!--</div>-->
                    </div>
                    <div class="aj-s-right">
                        <div class="aj-s-r-wrap">
                            <div class="aj-s-w-w-block">
                                


                                <ul class="aj-ul aj-select">
                                    <li class="aj-li"><span></span>默认</li>
                                    <li class="aj-li"><span></span>Amazon</li>
                                    <li class="aj-li"><span></span>Jumei Youpin</li>
                                    <li class="aj-li"><span></span>Quanmama</li>
                                    <li class="aj-li"><span></span>JD</li>
                                    <li class="aj-li"><span></span>Tmall</li>
                                    <li class="aj-li"><span></span>Quanmama</li>
                                    <li class="aj-li"><span></span>JD</li>
                                    <li class="aj-li"><span></span>Tmall</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div id="aj-delay-page">
        <img  class="img" src="http://www.quanmama.com/AdminImageUpload/20148150838532.jpg">
    </div>
    
    <%if (Model.CouponList != null && Model.CouponList.Count > 0)
      { %>
    <div class="deals">
        <%foreach (var item in Model.CouponList)
          { %>
        <%
            var vd = new ViewDataDictionary();
            vd.Add("img", "1");

            Html.RenderPartial("~/Views/Shared/Mobile_CouponCell.ascx", item, vd);%>
        <%} %>
        <br />
    </div>
    <script type="text/javascript">
        $(".tab_yhq").addClass("current");
    </script>
    <%} %>


    <%if (Model.BestDealList != null && Model.BestDealList.Count > 0)
      { %>
    <div class="clearfix zdm_wrap" style="border-bottom: 1px; padding-bottom: 10px;">
        <h3 style='text-align: center; padding: 5px;'>
            <%=Model._OurCategory.CategoryName %>相关优惠</h3>
        <ul id="post_list_preferential" class="list list_preferential dealout">
            <%int zidx = 0;

              foreach (var item in Model.BestDealList)
              {
                  zidx++;
                  ViewDataDictionary vd = null;
                  if (zidx > 2)
                  {
                      vd = new ViewDataDictionary();
                      vd.Add("zidx", zidx++);
                  }%>
            <%
                Html.RenderPartial("~/Views/Shared/Mobile_ZdmItemCell.ascx", item, vd);%>
            <%} %>
        </ul>
    </div>
    <%if (Model._HasNextPage)
      { %>
    <div style="cursor: pointer;" class="getmore">
        <a href="javascript:;" class="loadMore">加载更多</a></div>
    <script type="text/javascript">
    
         <%=Model.BuildNextPageParameters() %>

var is_inited = 0;
var zdmListForDuplicateCheck = new Array();
function initZdmListForDuplicateCheck() {
    if (is_inited == 0) {
        $(".zdm_list_li").each(function () {
            var zdm_id = parseInt($(this).attr("data-id"));
            if (zdm_id > 0 && zdmListForDuplicateCheck.indexOf(zdm_id) < 0) {
                zdmListForDuplicateCheck.push(zdm_id);
            }
        });

        is_inited = 1;
    }
}

function youhuiListLoad() {
     $(".loadMore").addClass("aj-is-loading");

    $.ajax({
        type: "get",
        url: "/myajax/mobileYouhuiListPage?page=" + (current_page + 1) + "&pagetype=" + pagetype + "&posttype="+ posttype + "&promotype=" + promotype + "&sort=" + sort + "&category=" + category + "&site=" + site + "&time=" + time + "&area=" + area + "&status=" + status + "&pagesize=" + pagesize,
        dataType: "html",
        success: function (html) {
            current_page = current_page + 1;
            $(".loadMore").removeClass("aj-is-loading");

            if ($(html).find(".zdm_list_li").length == 0) {
                 $(".loadMore").hide();
            } else {
                initZdmListForDuplicateCheck();

                $(html).find(".zdm_list_li").each(function () {
                    var now_zdm_id = parseInt($(this).attr("data-id"));

                    if (now_zdm_id > 0 && zdmListForDuplicateCheck.indexOf(now_zdm_id) < 0) {
                        zdmListForDuplicateCheck.push(now_zdm_id);

                        $(".list").append($(this).prop("outerHTML"));
                    }
                });

            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".loadMore").removeClass("aj-is-loading");
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function () {
                youhuiListLoad();
                $(this).parent().remove();
            });
        }
    });
}

        $(function () {
            $(".loadMore").click(function () {
               youhuiListLoad();
            });
        });
    </script>
    <%} %>
    
    <%} %>
</asp:Content>
