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

public partial class SingleValueBinding : System.Web.UI.Page
{
    //定义一个属性，用于进行数据绑定
    private string _path = null;
    public string Path
    {
        get {return _path; }
        set { _path = value; }
    }


    protected void Page_Load(object sender, EventArgs e)
    {
        _path = Server.MapPath(Request.Url.LocalPath);
        Page.DataBind();        
    }
    //这个函数将绑定到页面上的Label控件中
    protected string GetWeeks()
    {
        DayOfWeek dayofweek = DateTime.Now.DayOfWeek;
        string chineseweek = null;
        switch (dayofweek)
        {
            case DayOfWeek.Monday:
                chineseweek = "星期一，项目跟踪模块启动";
                break;
            case DayOfWeek.Tuesday:
                chineseweek = "星期二，架构师设计架构";
                break;
            case DayOfWeek.Wednesday:
                chineseweek = "星期三，与客户沟通项目的架构";
                break;
            case DayOfWeek.Thursday:
                chineseweek = "星期四，修改架构以适应客户需求";
                break;
            case DayOfWeek.Friday:
                chineseweek = "星期五，需求工程师评估软件构想";
                break;
            case DayOfWeek.Saturday:
                chineseweek = "星期六，开发人员准备设计框架";
                break;
            case DayOfWeek.Sunday:
                chineseweek = "星期天，编码与报表测试";
                break;
            default:
                chineseweek = "未知";
                break;
        }
        return chineseweek;
    }
}
