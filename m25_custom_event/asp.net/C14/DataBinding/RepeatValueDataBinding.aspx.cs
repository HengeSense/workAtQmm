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

public partial class RepeatValueDataBinding : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            //获取数据源信息
            List<Personal> personals = GetPersonals();
            //-------------------------------------------------------
            //绑定到DropDownList1控件
            DropDownList1.DataSource = personals;
            DropDownList1.DataTextField = "Name";
            DropDownList1.DataTextFormatString = "人员姓名：{0}";
            DropDownList1.DataValueField = "Position";
            //------------------------------------------------------
            //绑定到ListBox控件
            ListBox1.DataSource = personals;
            ListBox1.DataTextField = "City";
            ListBox1.DataTextFormatString = "城市：{0}";
            ListBox1.DataValueField = "Name";
            //------------------------------------------------------
            //绑定到CheckBoxList控件
            CheckBoxList1.DataSource = personals;
            CheckBoxList1.DataTextField = "Name";
            CheckBoxList1.DataTextFormatString = "人员姓名：{0}";
            CheckBoxList1.DataValueField = "Gender";
            //------------------------------------------------------
            //绑定到RadioButtonList控件
            RadioButtonList1.DataSource = personals;
            RadioButtonList1.DataTextField = "Name";
            RadioButtonList1.DataTextFormatString = "人员姓名：{0}";
            RadioButtonList1.DataValueField = "Gender";
            //------------------------------------------------------
            //绑定到BulletedList控件
            BulletedList1.DataSource = personals;
            BulletedList1.DataTextField = "Name";
            BulletedList1.DataTextFormatString = "人员姓名：{0}";
            BulletedList1.DataValueField = "Gender";
            Page.DataBind();
        }
    }
    /// <summary>
    /// 使用集合初始化类定义一个List<Personal>类型的集合
    /// </summary>
    /// <returns></returns>
    protected List<Personal> GetPersonals()
    {
        List<Personal> personals = new List<Personal>()
        {
            new Personal()
              {
                  Name="张三",Age=27,City="上海",Gender="男",Position="软件工程师"
              },
           new Personal()
           {
               Name="李四",Age=28,City="北京",Gender="男",Position="软件工程师"
           },
          new Personal()
          {
              Name="王五",Age=30,City="深圳",Gender="男",Position="项目组长"
          },
          new Personal()
          {
              Name="小燕",Age=23,City="广州",Gender="女",Position="UI美工"
          }
        };
        return personals;
    }
    //当选择不同的选择项时，使用SelectedValue可以获取绑定的选择值
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblInfo.Text += DropDownList1.SelectedValue + "<br/>";
    }
}
