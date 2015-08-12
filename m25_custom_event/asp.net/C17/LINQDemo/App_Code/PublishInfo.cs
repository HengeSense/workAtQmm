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
///出版社信息资料
/// </summary>
public class PublishInfo
{
    public string  PublishName { get; set; }
    public string Address { get; set; }
    public string  Contact { get; set; }
    public string  Phone { get; set; }
	public PublishInfo()
	{	
	}
}
