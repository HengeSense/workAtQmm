using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.Header != null)
        {
            Page.Header.Title = String.Format("动态母版页的标题");
            //为页面的Body标签创建一个样式 
            Style bodyStyle = new Style();
            bodyStyle.ForeColor = System.Drawing.Color.Blue;
            bodyStyle.BackColor = System.Drawing.Color.LightGray;
            // 添加样式到Header中
            Page.Header.StyleSheet.CreateStyleRule(bodyStyle, this, "BODY");


            // 创建元数据描述
            HtmlMeta metaDesc = new HtmlMeta();
            metaDesc.Name = "描述";
            metaDesc.Content = "使用HtmlMeta控件的示例";
            // 创建Meta关键字
            HtmlMeta metaKeywords = new HtmlMeta();
            metaKeywords.Name = "KEYWORDS";
            metaKeywords.Content = "HtmlMeta,Page.Header,ASP.NET";
            //添加Meta控件到HtmlHead控件集合中
            HtmlHead head = (HtmlHead)Page.Header;
            head.Controls.Add(metaDesc);
            head.Controls.Add(metaKeywords);

            //Master.BannerTitle = "这是自定义的Banner条";
            //使用FindControl来改变母版页中Label控件的属性
            if (!Page.IsPostBack)
            {
                Label lblTitle = (Label)Master.FindControl("Label1");
                if (lblTitle != null)
                {
                    lblTitle.Text = "这是自定义的Banner条";
                }
            }

        }
    }

    protected void Page_PreInit(object sender, EventArgs e)
    {
        if (Request["master"] != null)
        {
            switch (Request["master"])
            {
                //调用Page.MasterPageFile属性设置母版页文件
                case "Dynamic1":
                    Page.MasterPageFile = "~/MasterPage/MasterPage.master";
                    break;
                case "Dynamic2":
                    Page.MasterPageFile = "~/MasterPage/MasterPage2.master";
                    break;
            }
        }
    }
}
