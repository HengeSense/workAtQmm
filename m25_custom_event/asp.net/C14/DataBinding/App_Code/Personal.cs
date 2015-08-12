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
///一个人事信息类
/// </summary>
public class Personal
{
    //使用自动属性特性定义5个属性
    public string  Name { get; set; }
    public string City { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
    public string Position { get; set; }
    public Personal()
    { }
	public Personal(string name,string ctiy,int age,string gendar,string position)
	{
        Name = name;
        City = City;
        Age = age;
        Gender = gendar;
        Position = position;
	}
}
