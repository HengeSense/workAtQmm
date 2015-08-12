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

public partial class ProgrammingScriptManager : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取当前页面的ScriptManager对象
        ScriptManager sm = ScriptManager.GetCurrent(this);
        sm.RegisterAsyncPostBackControl(btnshow);
        if (sm.IsInAsyncPostBack)
        {
            //执行异步回送代码
        }
        sm.Services.Add(new ServiceReference("Servertime.asmx"));
        sm.Scripts.Add(new ScriptReference("/Script/Script1.js"));
    }
    protected void btnshow_Click(object sender, EventArgs e)
    {
        lbltime.Text = DateTime.Now.ToString();
    }
}
