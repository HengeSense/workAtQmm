using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
///Book 的摘要说明
/// </summary>
[Serializable]
public class Book
{
	public Book(string bookname,string isbn,double price)
	{
        BookName = bookname;
        ISBN = isbn;
        Price = price;    
	}
    //书名
    public string BookName { get; set; }
    //ISBN编号
    public string ISBN { get; set; }
    //价钱
    public double Price { get; set; }
}
