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
        int count = 0;
        //防止其他请求访问应用程序变量
        Application.Lock();
        //判断应用程序变量HitCounterForOrderPage是否存在
        if (Application["HitCounterForOrderPage"] != null)
            //从应用程变量中获取值赋给count变量
            count = (int)Application["HitCounterForOrderPage"];
        //进行累加操作
        count++;
        //再将计数值保存到应用程序变量中
        Application["HitCounterForOrderPage"] = count;
        //撤消对应用程序变量的排他访问
        Application.UnLock;
        lblCounter.Text = count.ToString();
    }
}
