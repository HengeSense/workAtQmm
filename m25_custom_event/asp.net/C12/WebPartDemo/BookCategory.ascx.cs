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

public partial class BookCategory : System.Web.UI.UserControl
{
    //添加Personalizable将使属性被保存到WebPart的个性化存储中
    [Personalizable]
    public String BookCategorys
    {
        get
        {           
            return (ddBookCategories.SelectedValue);
        }
        set
        {
            ddBookCategories.SelectedIndex=
                ddBookCategories.Items.IndexOf(ddBookCategories.Items.FindByValue(value));
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }
}
