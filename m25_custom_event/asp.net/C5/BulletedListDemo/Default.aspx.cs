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
    protected void BulletedList1_Click(object sender, BulletedListEventArgs e)
    {
        //BulletedListEventArgs参数包含了当前点中的Item项
        string ItemText = BulletedList1.Items[e.Index].Text;
        Label1.Text = "你选择的Item是：" + ItemText;
    }
}
