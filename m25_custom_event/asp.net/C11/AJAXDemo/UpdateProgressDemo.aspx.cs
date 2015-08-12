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

public partial class UpdateProgressDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnTime_Click(object sender, EventArgs e)
    {
        UpdateLabel(lblServerTime);
    }

    private void UpdateLabel(Label lbl)
    {
        //为了模拟大数据量的处理延迟，这里调用Sleep方法将时间延迟三秒
        System.Threading.Thread.Sleep(10000);
        //更新服务器端时间
        lbl.Text = DateTime.Now.ToString();
    }
}
