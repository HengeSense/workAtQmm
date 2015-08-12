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
    protected void Calendar1_SelectionChanged(object sender, EventArgs e)
    {
        //Label1.Text = "当前选择的日期为：" + Calendar1.SelectedDate.ToShortDateString();       
        Label1.Text = "当前选择的日期为：<br/>";
        foreach (DateTime dt in Calendar1.SelectedDates)
        {
            Label1.Text += dt.ToShortDateString() + "<br/>";
        }
    }
    protected void Calendar1_PreRender(object sender, EventArgs e)
    {

    }
    protected void Calendar1_DayRender(object sender, DayRenderEventArgs e)
    {
        if (e.Day.IsWeekend)
        {
            //IsSelectable布尔属性控制日期是否可被选择
            e.Day.IsSelectable = false;
        }
        if (e.Day.IsOtherMonth)
        {
            //e.Cell属性代表一个日期框
            e.Cell.Text = "-";
        }

        //检查日期是否为3月5号。
        if (e.Day.Date.Day == 5 && e.Day.Date.Month == 3)
        {
            e.Cell.BackColor = System.Drawing.Color.Yellow;
            //向该列添加静态文本
            Label lbl = new Label();
            lbl.Text = "<br />学习雷锋好榜样!";
            e.Cell.Controls.Add(lbl);
        }
        Calendar1.SelectedDate = DateTime.Now.AddDays(2).Date;
        //下面的代码将使用SelectedDates选中2008年3月的每个星期天
        SelectedDatesCollection theDates = Calendar1.SelectedDates;
        theDates.Clear();
        theDates.Add(new DateTime(2008, 3, 2));
        theDates.Add(new DateTime(2008, 3, 9));
        theDates.Add(new DateTime(2008, 3, 16));
        theDates.Add(new DateTime(2008, 3, 23));

    }
}
