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
using System.Data.SqlClient;
public partial class SqlDataSourceDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void SqlDataSource1_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
    {
        //使用SqlDataSourceSelectingEventArgs的Command属性获取当前的命令对象。
        //然后使用命令对象的Parameters集合来获取参数值。        
        if ((int)e.Command.Parameters[0].Value == 7)
        {
            //如果参数值为7，则停止查询的执行
            e.Cancel = true;
        }
       // e.Command.CommandText = "select * from product";
    }
    protected void SqlDataSource1_Deleted(object sender, SqlDataSourceStatusEventArgs e)
    {

    }
    protected void SqlDataSource1_Updating(object sender, SqlDataSourceCommandEventArgs e)
    {

    }
    protected void SqlDataSource1_Updated(object sender, SqlDataSourceStatusEventArgs e)
    {

    }
    protected void SqlDataSource1_Selected(object sender, SqlDataSourceStatusEventArgs e)
    {
        //如果有引发异常的话
        if (e.Exception != null)
        {
            if (e.Exception.GetType() == typeof(SqlException))
            {
                //显示出错信息，也可以加事件日志，或者将错误信息进行更好的封装
                Response.Write("在查询数据库时产生了一个错误，错误消息为：" + e.Exception.Message);
                //表示已经处理的数据库错误，系统将不会跳转到令网站使用者难以看懂的错误页面
                e.ExceptionHandled = true;
            }
        }
    }
    protected void SqlDataSource1_Inserting(object sender, SqlDataSourceCommandEventArgs e)
    {

    }
    protected void SqlDataSource1_Inserted(object sender, SqlDataSourceStatusEventArgs e)
    {

    }
    protected void SqlDataSource1_Deleting(object sender, SqlDataSourceCommandEventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        DataView dv = new DataView();
        if (SqlDataSource1.DataSourceMode == SqlDataSourceMode.DataSet)
        {
            dv = (DataView)SqlDataSource1.Select(DataSourceSelectArguments.Empty);
        }
        if (dv != null)
        {
            //可以在这里将DataView绑定到任何数据显示控件，以执行操作
        }
        else
        {
            Response.Write("没有数据或设置不正确");
        }
    }
}
