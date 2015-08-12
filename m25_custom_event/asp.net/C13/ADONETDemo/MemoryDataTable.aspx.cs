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

public partial class MemoryDataTable : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnCreate_Click(object sender, EventArgs e)
    {
        //为DataTable指定一个表名，通过dt.TableName可以访问表名
        DataTable dt = new DataTable("内存表示例");
        //为DataTable添加架构信息，也就是创建字段
        dt.Columns.Add(new DataColumn("书名", typeof(string)));
        dt.Columns.Add(new DataColumn("书号", typeof(string)));
        //使用数组的形式创建表列
        DataColumn[] dcs = new DataColumn[2];
        dcs[0] = new DataColumn("价格", typeof(decimal));
        dcs[1] = new DataColumn("出版社", typeof(string));
        //调用DataTable的Columns集合的AddRange方法添加列
        dt.Columns.AddRange(dcs);
        //初始化新的行
        DataRow dr = dt.NewRow();
        //为DataRow中的列赋字值
        dr["书名"] = "C#编程系列";
        dr["书号"] = "12345-678-90";
        dr["价格"] = 45.3;
        dr["出版社"] = "我的出版社";
        //必须将创建的行添加的DataTable的Rows集合中。
        dt.Rows.Add(dr);
        //也可以使用Rows的重载的Add方法来添加表列
        dt.Rows.Add(new object[] { "C#编程系列二", "33455-333-333", 45.7, "我的出版社" });
        //绑定到GridView对象
        GridView1.DataSource = dt;
        GridView1.DataBind();
    }
}
