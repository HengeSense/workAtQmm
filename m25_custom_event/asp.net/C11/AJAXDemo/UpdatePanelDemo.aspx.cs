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

public partial class UpdatePanelDemo : System.Web.UI.Page
{
    private Label Label1;
    protected void Page_Load(object sender, EventArgs e)
    {
        UpdatePanel upd = new UpdatePanel();
        upd.ID = "UpdatePanel4";
        //定义一个按钮
        Button button1 = new Button();
        button1.ID = "Button1";
        button1.Text = "现在的时间是：";
        button1.Click += new EventHandler(Button4_Click);
        // 定义literals控件
        LiteralControl lit = new LiteralControl("<br>");
        // 定义Label控件
        Label1 = new Label();
        Label1.ID = "Label1";
        Label1.Text = "[time]";
        //将控件添加到UpdatePanel的属性ContentTemplatecontainer.Controls控件集合中去。
        upd.ContentTemplateContainer.Controls.Add(button1);
        upd.ContentTemplateContainer.Controls.Add(lit);
        upd.ContentTemplateContainer.Controls.Add(Label1);
        // 添加UpdatePanel到窗体的控件集合中去。
        this.Form.Controls.Add(upd);
    }   
    protected void Button4_Click(object sender, EventArgs e)
    {
        Label1.Text = DateTime.Now.ToString();
    }   

    protected void btn1_Click(object sender, EventArgs e)
    {
        UpdateLabel();
    }
    /// <summary>
    /// 使用当前的时间值更新三个Label控件
    /// </summary>
    private void UpdateLabel()
    {
        string theTime = DateTime.Now.ToLongTimeString();
        for (int i = 0; i < 3; i++)
        {
            theTime += "<br />" + theTime;
        }
        lblInfo1.Text = theTime;
        lblInfo2.Text = theTime;
        lblInfo3.Text = theTime;
    }
    protected void btn2_Click(object sender, EventArgs e)
    {
        UpdateLabel();
    }
    protected void btn3_Click(object sender, EventArgs e)
    {
       UpdateLabel();
       UpdatePanel2.Update();
    }
    protected void btn4_Click(object sender, EventArgs e)
    {
        UpdateLabel();
        //可以调用Update方法更新UpdatePanel的内容。
        // UpdatePanel1.Update();
    }

}
