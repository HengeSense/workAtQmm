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
//添加泛型命名空间
using System.Collections.Generic;
public partial class LINQObjectDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    //构造了一个数组
    private string[] staff = { "Jason", "Katty", "Tom", "Dick", "Harry" };
    //普通的查询语法
    protected void Button1_Click(object sender, EventArgs e)
    {
        foreach (string str in staff)
        {
            if (str.Length > 4)
            {
                Label1.Text += str + "<br/>";
            }
        }
    }
    //使用LINQ语法
    protected void Button2_Click(object sender, EventArgs e)
    {
        IEnumerable<string> result = from str in staff
                                    where str.Length > 4
                                    select str;
        foreach (string str in result)
        {
            Label2.Text += str + "<br/>";
        }
    }
    //使用方法语法
    protected void usingMethod()
    {
        IEnumerable<string> result = staff.Where(n => n.Length > 4);
        foreach (string str in result)
        {
            Label2.Text += str + "<br/>";
        }     
    }

    protected void LinqSqlExpress()
    {
        int[] scoresarray = { 90, 80, 70, 66, 78, 98, 58 };
        IEnumerable<int> scores = from score in scoresarray
                                  where score > 80
                                  orderby score descending
                                  select score;
    }

    protected void SelectOperatorDemo()
    {
        List<Book> books = new List<Book>()
        {
            new Book(){BookName="C#程序设计",ISBN="123456",Price=30,Publish="A出版社"},
            new Book(){BookName="ASP.NET程序设计",ISBN="123456",Price=55.6,Publish="B出版社"},
            new Book(){BookName="C++程序设计",ISBN="123456",Price=66.8,Publish="C出版社"},
            new Book(){BookName="java程序设计",ISBN="123456",Price=45,Publish="D出版社"},
            new Book(){BookName="Delphi程序设计",ISBN="123456",Price=62,Publish="E出版社"},
            new Book(){BookName=".NET程序设计",ISBN="123456",Price=74,Publish="F出版社"}
        };
        //返回书籍名称和价格
       // var selectbooks = from singlebook in books
       //                   select singlebook.BookName + singlebook.Price;
        //使用匿名投影
        //var selectbooks = from singlebook in books
        //                  select new
        //                  {
        //                      书籍名称 = singlebook.BookName,
        //                      ISBN编号 = singlebook.ISBN,
        //                      书籍价格 = singlebook.Price
        //                  };
        //使用指定名称的投影
        //IEnumerable<Book> bookset = from singlebook in books
        //                          select new Book
        //                          {
        //                              BookName = singlebook.BookName,
        //                              Price = singlebook.Price,
        //                              ISBN = singlebook.ISBN
        //                          };
        //使用方法过滤
        //IEnumerable<Book> bookset = from singlebook in books
        //                            where CheckBookPrice(singlebook)
        //                            select new Book
        //                            {
        //                                BookName = singlebook.BookName,
        //                                Price = singlebook.Price,
        //                                ISBN = singlebook.ISBN
        //                            };
        ////使用排序
        //IEnumerable<Book> bookset = from singlebook in books
        //                            where CheckBookPrice(singlebook)
        //                            orderby singlebook.Price descending
        //                            select new Book
        //                            {
        //                                BookName = singlebook.BookName,
        //                                Price = singlebook.Price,
        //                                ISBN = singlebook.ISBN
        //                            };
        ////使用分组
        //var bookset = from singlebook in books
        //              group singlebook by singlebook.BookName[0] into g
        //              select new
        //              {
        //                  键 = g.Key,
        //                  值 = g
        //              };
        ////遍历分组数据
        //foreach (var g in bookset)
        //{
        //    Label3.Text += "键信息是" + g.键+"<br/>";
        //    foreach (var w in g.值)
        //    {
        //        Label3.Text += w.BookName + "<br/>";
        //    }
        //    Label3.Text += "<br/>";
        //}

        //使用聚合函数进行分组统计
        var bookset = from singlebook in books
                      group singlebook by singlebook.BookName[0] into g
                      select new
                      {
                          键 = g.Key,
                          记录数 = g.Count(),
                          最大价格=g.Max(p=>p.Price),
                          最小价格=g.Min(p=>p.Price),
                          平均价格=g.Min(p=>p.Price)
                      };
        GridView1.DataSource = bookset;
        GridView1.DataBind();                                                
    }
    //创建一个外部方法
    protected bool CheckBookPrice(Book book)
    {
        return book.Price > 30;
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        SelectOperatorDemo();
    }

  


}
