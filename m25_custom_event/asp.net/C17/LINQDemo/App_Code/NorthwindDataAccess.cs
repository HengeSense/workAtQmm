using System;
using System.Linq;
//添加如下的命名空间
using System.Web.Configuration;
using System.Data.Linq;
using System.Data.SqlClient;
using System.Collections.Generic;
/// <summary>
///LINQ数据访问类
/// </summary>
public class NorthwindDataAccess
{
	public NorthwindDataAccess()
	{
	}
    string connectionstring = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    //获取一个IQueryable对象以便后续查询
    public IQueryable<Products> GetProducts()
    {
        DataContext dataContext = new DataContext(connectionstring);
        return dataContext.GetTable<Products>();
    }
    /// <summary>
    /// 根据指定的产品编码获取产品记录
    /// </summary>
    /// <param name="ProductID">指定的产品编码</param>
    /// <returns></returns>
    public List<Products> GetProducts(int ProductID)
    {
        DataContext dataContext = new DataContext(connectionstring);
        //查询产品表中指定产品ID的记录
        IEnumerable<Products> mathes = from product in dataContext.GetTable<Products>()
                                       where product.ProductID == ProductID
                                       select product;
        try
        {
            //立即执行查询，返回List对象
            return mathes.ToList<Products>();
        }
        catch
        {
            throw new Exception("产生了一个错误");
        }        
    }

    DataContext _dataContext;
    protected Products GetProduct(int ProductID)
    {
        _dataContext = new DataContext(connectionstring);
        var matches = from product in _dataContext.GetTable<Products>()
                      where product.ProductID == ProductID
                      select product;
        //调用Single方法返回单条记录
        return matches.Single();                    
    }
    //调用存储过程方法
    public IEnumerable<CustOrdersDetailResult> GetCustOrdersDetails(int OrderID)
    {
        ProductsDataContext pdc = new ProductsDataContext();
        return pdc.CustOrdersDetail(OrderID);
    }
}
