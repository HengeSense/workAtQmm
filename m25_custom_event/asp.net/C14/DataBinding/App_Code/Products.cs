using System;
using System.Data;
using System.Xml.Linq;
//需要添加三个命名空间
using System.Web.Configuration;
using System.Data.SqlClient;
using System.Collections.Generic;
/// <summary>
///Products 的摘要说明
/// </summary>
public class Products
{
    #region 类的私有变量区
    protected int _productID;
    protected string _productName = String.Empty;
    protected int _supplierID;
    protected int _categoryID;
    protected string _quantityPerUnit = String.Empty;
    protected decimal _unitPrice;
    protected short _unitsInStock;
    protected short _unitsOnOrder;
    protected short _reorderLevel;
    protected bool _discontinued;
    #endregion
    #region 类的构造函数区
    //指定默认的构造函数，将由ObjectDataSource调用
    public Products()
    {
    }
    //根据指定的产品号码获取产品实例
    public  Products(int productID)
    {
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("select * from products where ProductID=@ProductID", conn);
            cmd.Parameters.AddWithValue("@ProductID", productID);
            SqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                this.LoadFromReader(reader);
                reader.Close();
            }
            else
            {
                if (!reader.IsClosed) reader.Close();
            }
        }
    }
    //该构造函数从SqlDataReader中实例化一个产品对象
    public Products(SqlDataReader reader)
    {
        this.LoadFromReader(reader);
    }
    //该辅方法用于从reader中实例化对象
    protected void LoadFromReader(SqlDataReader reader)
    {
        if (reader != null && !reader.IsClosed)
        {
            if (!reader.IsDBNull(0)) _productID = reader.GetInt32(0);
            if (!reader.IsDBNull(1)) _productName = reader.GetString(1);
            if (!reader.IsDBNull(2)) _supplierID = reader.GetInt32(2);
            if (!reader.IsDBNull(3)) _categoryID = reader.GetInt32(3);
            if (!reader.IsDBNull(4)) _quantityPerUnit = reader.GetString(4);
            if (!reader.IsDBNull(5)) _unitPrice = reader.GetDecimal(5);
            if (!reader.IsDBNull(6)) _unitsInStock = reader.GetInt16(6);
            if (!reader.IsDBNull(7)) _unitsOnOrder = reader.GetInt16(7);
            if (!reader.IsDBNull(8)) _reorderLevel = reader.GetInt16(8);
            if (!reader.IsDBNull(9)) _discontinued = reader.GetBoolean(9);
        }
    }
    #endregion

    //根据指定的产品编码获取产品
    public Products GetProduct(int productID)
    {
        return new Products(productID);
    }
    //获取所有的产品列表
    public List<Products> GetProducts()
    {
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        List<Products> temp = new List<Products>();
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("select * from products", conn);            
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                temp.Add(new Products(reader));
            }
        }
        return temp;
    }
    public List<Products> GetProductsByCategoryID(int categoryID)
    {
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        List<Products> temp = new List<Products>();
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("select * from products where CategoryID=@CategoryID", conn);
            cmd.Parameters.AddWithValue("@CategoryID", categoryID);
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                temp.Add(new Products(reader));
            }
        }
        return temp;
    }
    //创建一个更新产品的方法
    public void UpdateProduct(Products product)
    {
        string connectionStr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connectionStr))
        {
            conn.Open();
            string sqlstr = "UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID, [QuantityPerUnit] = @QuantityPerUnit, [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock, [UnitsOnOrder] = @UnitsOnOrder, [ReorderLevel] = @ReorderLevel, [Discontinued] = @Discontinued WHERE [ProductID] = @ProductID";
            SqlCommand cmd = new SqlCommand(sqlstr, conn);
            cmd.Parameters.AddWithValue("@ProductID", product.ProductID);
            cmd.Parameters.AddWithValue("@ProductName", product.ProductName);
            cmd.Parameters.AddWithValue("@SupplierID", product.SupplierID);
            cmd.Parameters.AddWithValue("@CategoryID", product.CategoryID);
            cmd.Parameters.AddWithValue("@QuantityPerUnit", product.QuantityPerUnit);
            cmd.Parameters.AddWithValue("@UnitPrice", product.UnitPrice);
            cmd.Parameters.AddWithValue("UnitsInStock", product.UnitsInStock);
            cmd.Parameters.AddWithValue("@UnitsOnOrder", product.UnitsOnOrder);
            cmd.Parameters.AddWithValue("@ReorderLevel", product.ReorderLevel);
            cmd.Parameters.AddWithValue("@Discontinued", product.Discontinued);
            cmd.ExecuteNonQuery();
        }
    }

    #region 产品类的公共属性区
    public int ProductID
    {
        get { return _productID; }
        set { _productID = value; }
    }
    //产品名称 
    public string ProductName
    {
        get { return _productName; }
        set { _productName = value; }
    }
    //供应商编码
    public int SupplierID
    {
        get { return _supplierID; }
        set { _supplierID = value; }
    }
    //分类编码
    public int CategoryID
    {
        get { return _categoryID; }
        set { _categoryID = value; }
    }
    //单位数量
    public string QuantityPerUnit
    {
        get { return _quantityPerUnit; }
        set { _quantityPerUnit = value; }
    }
    //单价
    public decimal UnitPrice
    {
        get { return _unitPrice; }
        set { _unitPrice = value; }
    }
    //库存
    public short UnitsInStock
    {
        get { return _unitsInStock; }
        set { _unitsInStock = value; }
    }
    //订单 
    public short UnitsOnOrder
    {
        get { return _unitsOnOrder; }
        set { _unitsOnOrder = value; }
    }
    //等级
    public short ReorderLevel
    {
        get { return _reorderLevel; }
        set { _reorderLevel = value; }
    }
    //是否报废
    public bool Discontinued
    {
        get { return _discontinued; }
        set { _discontinued = value; }
    }
    #endregion
}
