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
//引用这些命名空间
using System.Web.Configuration;
using System.Data.SqlClient;
using ProductsandSuppliersTableAdapters;

public partial class TypedDataSetDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        FillDataSet();        
    }
    //私有变量，类内部使用
    ProductsandSuppliers ds = new ProductsandSuppliers();
    //一个填充Northwind数据库中产品和供应商到DataSet中去的函数
    protected void FillDataSet()
    {
        ProductsTableAdapter productadapter = new ProductsTableAdapter();
        productadapter.Fill(ds.Products);
        SuppliersTableAdapter supplieradapter = new SuppliersTableAdapter();
        supplieradapter.Fill(ds.Suppliers);
    }
    protected void SingleTableQuery()
    {
        var query = from product in ds.Products
                    where product.ProductID > 60
                    select new
                    {
                        product.ProductID,
                        product.ProductName,
                        product.QuantityPerUnit,
                        product.SupplierID
                    };
        GridView1.DataSource = query;
        GridView1.DataBind();
    }
    protected void MoreThanOneTable()
    {
        var query = from product in ds.Products
                    join supplier in ds.Suppliers
                    on product.SupplierID equals supplier.SupplierID
                    where product.ProductID > 60
                    select new
                    {
                        product.ProductID,
                        product.ProductName,
                        supplier.CompanyName,
                        supplier.ContactName,
                        supplier.Country
                    };
        GridView1.DataSource = query;
        GridView1.DataBind();
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        SingleTableQuery();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        MoreThanOneTable();
    }
}
