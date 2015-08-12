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
using System.Collections.Generic;

public partial class joinoperator : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //使用一个泛型List对象保存书籍信息
        books = new List<Book>()
        {
            new Book(){BookName="C#程序设计",ISBN="123456",Price=30,Publish="A出版社"},
            new Book(){BookName="ASP.NET程序设计",ISBN="123456",Price=55.6,Publish="B出版社"},
            new Book(){BookName="C++程序设计",ISBN="123456",Price=66.8,Publish="A出版社"},
            new Book(){BookName="java程序设计",ISBN="123456",Price=45,Publish="D出版社"},
            new Book(){BookName="Delphi程序设计",ISBN="123456",Price=62,Publish="A出版社"},
            new Book(){BookName=".NET程序设计",ISBN="123456",Price=74,Publish="F出版社"}
        };
        //使用一个泛型List对象保存出版社信息
        publishs = new List<PublishInfo>()
        {
            new PublishInfo(){Address="地址1", Contact="孙悟空", Phone="3343568",PublishName="A出版社"},
            new PublishInfo(){Address="地址1+地址2",Contact="猪八戒",Phone="5546789",PublishName="B出版社"},
            new PublishInfo(){Address="地址3",Contact="唐三藏",Phone="5432123",PublishName="C出版社"}
        };
    }

    List<Book> books = null;
    List<PublishInfo> publishs = null;

    //内联代码
    protected void JoinOperation()
    {
        //使用联接查询，并取出书籍与出版社信息
        var BookandPublish = from book in books
                             join publish in publishs
                             on book.Publish equals publish.PublishName
                             select new
                             {
                                 书籍名称=book.BookName,
                                 出版社名称=book.Publish,
                                 出版社地址=publish.Address,
                                 出版社联系人=publish.Contact,
                                 出版社电话=publish.Phone
                             };
        //绑定到GridView控件。
        GridView1.DataSource = BookandPublish;
        GridView1.DataBind();        
    }


    protected void LeftJoinOperation()
    {
        //使用联接查询，并取出书籍与出版社信息
        var BookandPublish = from book in books
                             join publish in publishs
                             on book.Publish equals publish.PublishName into gj
                             //这里使用DefaultIfEmpty扩展方法实现左联
                             from subset in gj.DefaultIfEmpty()
                             select new
                             {
                                 书籍名称 = book.BookName,
                                 出版社名称 = book.Publish,
                                 出版社地址 =(subset==null?string.Empty:subset.Address),
                                 出版社联系人 = (subset == null ? string.Empty : subset.Contact),
                                 出版社电话 = (subset == null ? string.Empty : subset.Phone),
                             };
        //绑定到GridView控件。
        GridView1.DataSource = BookandPublish;
        GridView1.DataBind();  
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        JoinOperation();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        LeftJoinOperation();
    }
}
