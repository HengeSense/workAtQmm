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
//添加此命名空间
using System.Web.Caching;
using System.Web.Configuration;
using System.Data.SqlClient;
public partial class CacheRemoveCallBackDemo : System.Web.UI.Page
{
    //一个判断缓存项是否被移除的布尔值
    static bool itemRemoved = false;
    //缓存项被移除的原因
    static CacheItemRemovedReason reason;
    //定义一个回调委托。
    CacheItemRemovedCallback onRemove = null;

    //该方法将在缓存被移出后调用，用于通知应用程序，缓存己经被移除
    public void RemovedCallback(String k, Object v, CacheItemRemovedReason r)
    {
        itemRemoved = true;
        reason = r;
    }
    //页面加载时，将DataSet插入到委托中去。
    protected void Page_Load(object sender, EventArgs e)
    {
        //首先从Cache中获取Dataset
        DataSet productds = (DataSet)Cache["Products"];
        //如果Cache中不存在DataSet，则从数据库中获取DataSet，并添加到缓存中
        if (productds == null)
        {
            productds = GetProductDataSet();
            //创建委托实例
            onRemove = new CacheItemRemovedCallback(this.RemovedCallback);
           //创建一个基于web.config配置文件的依赖，当该文件发生变化时，则从缓存中移除缓存项。
            CacheDependency cd = new CacheDependency(Server.MapPath("web.config"));
            //在Insert中指定该依赖项，并且指定缓存的优先级为高优先级，传递一个传托。
            Cache.Insert("Products", productds, cd, System.Web.Caching.Cache.NoAbsoluteExpiration, TimeSpan.FromHours(1), CacheItemPriority.High,onRemove);
        }
        GridView1.DataSource = productds;
        GridView1.DataMember = "productsTable";
        GridView1.DataBind();        
    }
    /// <summary>
    /// 从数据库中获取产品信息，并返回一个DataSet对象
    /// </summary>
    /// <returns></returns>
    protected DataSet GetProductDataSet()
    {
        string connstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        DataSet ds = new DataSet();
        using (SqlConnection conn = new SqlConnection(connstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select top 5 * from Products", conn);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            sda.Fill(ds, "productsTable");
        }
        return ds;
    }
    //移除缓存项的按钮单击事件。
    protected void Button2_Click(object sender, EventArgs e)
    {
        if (Cache["Products"] != null)
        {
            //调用Cache.Remove方法移除缓存项
            Cache.Remove("Products");
        }
        //当缓存移除后，通过判断属性来更新label控件
        if (itemRemoved)
        {
            Label1.Text+="RemovedCallback事件触发";
            Label1.Text += "<BR>";
            Label1.Text += "原因是: <B>" + reason.ToString() + "</B>";
        }
        else
        {
            Label1.Text += "缓存键值是: <B>" + Server.HtmlEncode(Cache["Products"] as string) + "</B>";
        }
    }
}
