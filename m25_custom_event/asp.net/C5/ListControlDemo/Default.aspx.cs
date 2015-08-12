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
        //在这里必须要检查IsPostBack标记，如果是回送页面的话，
        //就不要再多次添加列表项，只在页面第一次加载时添加列表项。
        if (!Page.IsPostBack)
        {
            for (int i = 3; i <= 5; i++)
            {
                //每个列表项控件具有一个Items属性，
                //这是一个ListItemCollection类型的集合项，可以调用其Add方法来添加列表项
                ListBox1.Items.Add("列表项" + i.ToString());
                DropDownList1.Items.Add("列表项" + i.ToString());
                CheckBoxList1.Items.Add("列表项" + i.ToString());
                RadioButtonList1.Items.Add("列表项" + i.ToString());
                BulletedList1.Items.Add("列表项" + i.ToString());
            }
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Text = "<b>ListBox1的列表项如下：</b><br/>";
        foreach (ListItem li in ListBox1.Items)
        {
            Label1.Text += "-" + li.Text + "<br/>";
        }
        Label1.Text += "<b>DropDownList1的列表项如下：</b><br/>";
        foreach (ListItem li in DropDownList1.Items)
        {
            Label1.Text += "-" + li.Text + "<br/>";
        }
        Label1.Text += "<b>RadioButtonList的列表项如下：</b><br/>";
        foreach (ListItem li in RadioButtonList1.Items)
        {
            Label1.Text += "-" + li.Text + "<br/>";
        }
        Label1.Text += "<b>CheckBoxList的列表项如下：</b><br/>";
        foreach (ListItem li in CheckBoxList1.Items)
        {
            Label1.Text += "-" + li.Text + "<br/>";
        }
        Label1.Text += "<b>BulletedList的列表项如下：</b><br/>";
        foreach (ListItem li in BulletedList1.Items)
        {
            Label1.Text += "-" + li.Text + "<br/>";
        }
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        Label1.Text += "列表中选定项的第一个索引号是：" + ListBox1.SelectedIndex + "<br/>";
        Label1.Text += "列表中第一个选定项的Text是：" + ListBox1.SelectedItem.Text + "<br/>";
        Label1.Text += "列表中第一个选定项的值是：" + ListBox1.SelectedValue + "<br/>";
        foreach (ListItem li in ListBox1.Items)
        {
            //ListItem的Selected属性用于判断是否被选中
            if (li.Selected)
            {
                Label1.Text+= li.Text +"<br/>";             
            }            
        }
    }
    protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
    {

    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        Label1.Text = "当前选择的是" + DropDownList1.SelectedItem.Text;
    }
}
