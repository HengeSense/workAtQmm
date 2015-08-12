using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using JobSiteStarterKit.BOL;


public partial class companyprofile_aspx : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Roles.IsUserInRole(ConfigurationManager.AppSettings["employerrolename"]))
        {
            Response.Redirect("~/customerrorpages/NotAuthorized.aspx");
        }

        if (!Page.IsPostBack)
        {
            ddlCountry.DataSource = Country.GetCountries();
            ddlCountry.DataTextField = "CountryName";
            ddlCountry.DataValueField = "CountryID";
            ddlCountry.DataBind();


            Company objCompany = Company.GetCompany(Profile.UserName);
            if (objCompany != null)
            {
                ListItem li;
                txtCompanyName.Text = objCompany.CompanyName;
                txtAddress1.Text = objCompany.Address1;
                txtAddress2.Text = objCompany.Address2;
                txtCity.Text = objCompany.City;
                li = ddlState.Items.FindByValue(objCompany.StateID.ToString());
                if (li != null)
                {
                    ddlState.ClearSelection();
                    li.Selected = true;
                }
                li = ddlCountry.Items.FindByValue(objCompany.CountryID.ToString());
                if (li != null)
                {
                    ddlCountry.ClearSelection();
                    li.Selected = true;

                    ddlState.DataSource = State.GetStates(int.Parse(ddlCountry.SelectedValue));
                    ddlState.DataTextField = "StateName";
                    ddlState.DataValueField = "StateID";
                    ddlState.DataBind();
                    li = ddlState.Items.FindByValue(objCompany.StateID.ToString());
                    if (li != null)
                    {
                        ddlState.ClearSelection();
                        li.Selected = true;
                    }
                }
                txtZIP.Text = objCompany.ZIP;
                txtPhone.Text = objCompany.Phone;
                txtFax.Text = objCompany.Fax;
                txtEmail.Text = objCompany.Email;
                txtWebSiteUrl.Text = objCompany.WebSiteUrl;
                txtProfile.Text = objCompany.BriefProfile;
            }
        }
    }

    protected void ddlCountry_SelectedIndexChanged(object sender, EventArgs e)
    {
        ddlState.DataSource = State.GetStates(int.Parse(ddlCountry.SelectedValue));
        ddlState.DataTextField = "StateName";
        ddlState.DataValueField = "StateID";
        ddlState.DataBind();
    }

    //当企业雇主单击保存公司信息时
    protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
    {
        //首先实例化一个新的Company对象
        Company objCompany = new Company();
        //为这个新实例化的对象赋值
        objCompany.CompanyName = txtCompanyName.Text;
        objCompany.Address1 = txtAddress1.Text;
        objCompany.Address2 = txtAddress2.Text;
        objCompany.City = txtCity.Text;
        objCompany.StateID = int.Parse(ddlState.SelectedValue);
        objCompany.CountryID = int.Parse(ddlCountry.SelectedValue);
        objCompany.ZIP = txtZIP.Text;
        objCompany.Phone = txtPhone.Text;
        objCompany.Fax = txtFax.Text;
        objCompany.Email = txtEmail.Text;
        objCompany.WebSiteUrl = txtWebSiteUrl.Text;
        objCompany.BriefProfile = txtProfile.Text;
        objCompany.UserName = Profile.UserName;
        //如果己经存在公司信息，通过判断个性化中的CompanyID是否为-1
        if (Profile.Employer.CompanyID != -1)
        {
            objCompany.CompanyID = (int)Profile.Employer.CompanyID;
            //则更新公司信息
            Company.Update(objCompany);
        }
        else
        {
            //否则插入一个新的公司信息
            int i = Company.Insert(objCompany);
            Profile.Employer.CompanyID = i;
        }
        lblMsg.Text = "Your company profile is updated!";
    }
    protected void ImageButton2_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("~/default.aspx");
    }
}
