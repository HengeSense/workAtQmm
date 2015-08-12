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
using System.Data.Linq;
using System.Collections.Generic;

public partial class LINQOperation : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    ProductsDataContext pdc;
    //查询数据
    protected void Button1_Click(object sender, EventArgs e)
    {
        GridView1.DataSource = GetQuery(50);
        GridView1.DataBind();
    }
    //查询数据库数据
    protected IQueryable<Products> GetQuery(decimal basePrice)
    {
        pdc = new ProductsDataContext();
        var query = from product in pdc.Products
                    where product.UnitPrice > 50
                    select product;
        return query;
    }
    //修改数据
    protected void Button2_Click(object sender, EventArgs e)
    {
        foreach (Products prod in GetQuery(50))
        {
            prod.UnitPrice +=(decimal)0.5;
        }
        try
        {
            //使用DataContext的SupmitChange提交更改
            pdc.SubmitChanges();
        }
        catch (System.Data.Linq.ChangeConflictException ex)
        {
            Response.Write(string.Format("出现更新冲突！错误消息是：{0}", ex.Message));
        }
        //再次绑定
        GridView1.DataSource = GetQuery(50);
        GridView1.DataBind();
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        pdc = new ProductsDataContext();
        Products newprod = new Products();
        newprod.ProductName = "新添加的一项产品";
        newprod.SupplierID = 13;
        newprod.CategoryID = 5;
        newprod.UnitPrice = 57;
        newprod.UnitsInStock = 13;
        newprod.ReorderLevel = 15;
        //这里使用InsertOnSubmit将新创建的对象添插入到集合中。
        pdc.Products.InsertOnSubmit(newprod);
        //向数据库提交更改
        pdc.SubmitChanges();
        //再次绑定
        GridView1.DataSource = GetQuery(50);
        GridView1.DataBind();
    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        pdc = new ProductsDataContext();
        IEnumerable<Products> query = from product in pdc.Products
                                     where product.ProductID == 79
                                     select product;
        //可以使用DeleteOnSubmit一次删除一条记录
        //foreach (Products prod in query)
        //{
        //    pdc.Products.DeleteOnSubmit(prod);
        //}
        //也可以使用DeleteAllOnSubmit一次删除一批记录
        pdc.Products.DeleteAllOnSubmit(query);
        pdc.SubmitChanges();
        //再次绑定
        GridView1.DataSource = GetQuery(50);
        GridView1.DataBind();
    }
}
