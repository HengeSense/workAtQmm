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
public partial class ImageAndTextDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            //在页面首次加载时，向DropDownList中添加ListItem，表示宽度值
            for (int i = 1; i<=50; i++)
            {
                int itemvalue = i * 10;
                DropDownList1.Items.Add(new ListItem((itemvalue.ToString())));
            }
            //指定默认的选择项
            DropDownList1.SelectedIndex = 8;
            //获取DropDownList中选择项的值，来将向ThumbnailImageShow.aspx传递指定的查询字符串。
            Image1.ImageUrl = string.Format("~/SaveToPngFormat.asp?Height={0}", DropDownList1.SelectedValue.ToString());
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //获取DropDownList中选择项的值，来将向ThumbnailImageShow.aspx传递指定的查询字符串。
        Image1.ImageUrl = string.Format("~/SaveToPngFormat.aspx?Height={0}", DropDownList1.SelectedValue.ToString());
    }
}
