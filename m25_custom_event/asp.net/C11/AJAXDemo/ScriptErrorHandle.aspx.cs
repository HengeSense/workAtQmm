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

public partial class ScriptErrorHandle : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    protected void ScriptManager1_AsyncPostBackError(object sender, AsyncPostBackErrorEventArgs e)
    {
        //在这里，可以指定自定义异常信息。
      ScriptManager1.AsyncPostBackErrorMessage= "异常信息为：" + e.Exception.Message;
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //为了演示触发异常，这里直接抛出被零除的异常 
        throw new DivideByZeroException();
    }
}
