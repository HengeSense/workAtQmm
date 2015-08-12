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
///一个简单的书籍类
/// </summary>
public class Book
{
	public Book()
	{		
	}
     //BookName、ISBN、Price以及Publish
    public string BookName { get; set; }
    public string ISBN { get; set; }
    public double Price { get; set; }
    public string Publish { get; set; }
}
