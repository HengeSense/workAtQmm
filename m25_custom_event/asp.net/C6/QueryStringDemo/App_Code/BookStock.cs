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
//因为使用了泛型List在，因此添加此命名空间
using System.Collections.Generic;
/// <summary>
///BookStock类用于存储书籍类信息，在类初始化时为其填充数据。
/// </summary>
public class BookStock:List<Book>
{
	public BookStock()
	{
        Add(new Book("Silverlight 2.0高级开发指南", "111111", 80));
        Add(new Book("CSS网站布局实战", "222222", 70));
        Add(new Book("C# 3.5企业级应用程序开发与设计", "333333", 90));
        Add(new Book("在企业级应用程序中应用模式与重构", "444444", 50));
	}
}
