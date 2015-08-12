using System;
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

    }
    protected void Menu1_MenuItemClick(object sender, MenuEventArgs e)
    {
        //从MenuEventArgs中获取当前单击的MenuItem的值
        //根据不同的值来显示不同的起始结点
        switch (e.Item.Value)
        {
            case "产品":                
                SiteMapDataSource2.StartingNodeUrl = "Default.aspx?node=hardware";
                return;
            case "服务":
                SiteMapDataSource2.StartingNodeUrl = "Default.aspx?node=consulting";
                return;
            case "支持":
                SiteMapDataSource2.StartingNodeUrl = "Default.aspx?node=drivers";
                return;
        }
    }
}
