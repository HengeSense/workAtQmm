using System;
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

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Demo
        //ViewState["Counter"] = 5;
        //int counter=0;
        ////先判断集合中是否存在该键值对，如果不存在则引发NullReferenceException异常。
        //if (ViewState["Counter"] != null)
        //{
        //    //在获取指定类型的值时，需要进行类型转换
        //    counter = (int)ViewState["Counter"];
        //}
        #endregion
        if (!IsPostBack)
        {
            ListBox1.Items.Add("Item 1");
            ListBox1.Items.Add("Item 2");
            ListBox1.Items.Add("Item 3");
            ListBox1.Items.Add("Item 4");
        }
    }
}
