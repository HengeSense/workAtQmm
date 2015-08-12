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

public partial class ShowEventLog : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取日志名称为ASPNET35BookDemo的日志
        LogList loglist = new LogList("ASPNET35BookDemo");
        //将GridView1的数据源设置为LogList对象
        GridView1.DataSource = loglist;
        //调用DataBind方法进行绑定
        GridView1.DataBind();
    }
}
