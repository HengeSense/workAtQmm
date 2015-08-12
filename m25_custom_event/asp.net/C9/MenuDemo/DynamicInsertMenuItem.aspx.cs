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

public partial class DynamicInsertMenuItem : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        MenuItem mi = new MenuItem();
        mi.Text = "首页";
        mi.ToolTip = "显示网站的首页";
        Menu1.Items.Add(mi);
        MenuItem companymi = new MenuItem("公司介绍");
        Menu1.Items.Add(companymi);
        companymi.ChildItems.Add(new MenuItem("公司信息"));
        companymi.ChildItems.Add(new MenuItem("公司规模"));
        companymi.ChildItems.Add(new MenuItem("公司人员"));
        MenuItem productmi = new MenuItem("产品信息");
        Menu1.Items.Add(productmi);
        productmi.ChildItems.Add(new MenuItem("硬件产品"));
        productmi.ChildItems.Add(new MenuItem("软件产品"));
        productmi.ChildItems.Add(new MenuItem("专利产品"));
        MenuItem servicesmi = new MenuItem("服务中心");
        Menu1.Items.Add(servicesmi);
        servicesmi.ChildItems.Add(new MenuItem("服务事项"));
        servicesmi.ChildItems.Add(new MenuItem("服务申报"));
        servicesmi.ChildItems.Add(new MenuItem("服务建议"));
        MenuItem aboutmi = new MenuItem("关于");
        Menu1.Items.Add(aboutmi);
    }
}
