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
        
    }
    protected void CheckBox1_CheckedChanged(object sender, EventArgs e)
    {
        //遍历页面上所有的验证控件
        foreach (BaseValidator validator in Page.Validators)
        {
            //启用或禁用所有的验证控件
            validator.Enabled = CheckBox1.Checked;
            //启用或禁用所有的客户端验证
            validator.EnableClientScript = CheckBox2.Checked;
        }
    }
}
