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
//添加如下两个命名空间
using System.Data.SqlClient;
using System.Web.Configuration;
using System.IO;

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    /// <summary>
    /// 查询指定的EmployeeID的用户名称
    /// </summary>
    /// <param name="EmployeeID"></param>
    /// <returns></returns>
    protected string EmployeeIDToName(int EmployeeID)
    {
        string connectionstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connectionstr))
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand("Select ISNULL(FirstName+' '+lastName,'Unassign') as Name from Employees Where EmployeeID=@EmployeeID", conn);
            cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);
                return (string)cmd.ExecuteScalar();
        }
    }
    /// <summary>
    /// 图片上传函数
    /// </summary>
    /// <param name="employeeId">员工编号</param>
    /// <param name="photoFile">文件上传控件</param>
     public void OperatePhoto(int employeeId, FileUpload photoFile)
    {
         //如果上传文件为空则不执行此代码。
        if (photoFile == null || photoFile.HasFile == false) return;
         //获取文件的输入流
        Stream imageStream = photoFile.PostedFile.InputStream;
        int imageLength = photoFile.PostedFile.ContentLength;
        string imageType = photoFile.PostedFile.ContentType;
        MemoryStream mStream = new MemoryStream();
        byte[] imageData = new byte[1024];
        int count = 0;
        while (0 < (count = imageStream.Read(imageData, 0, imageData.Length)))
        {
            //将文件流转换为字节，然后写入到数据库中
            mStream.Write(imageData, 0, count);
        }
        string connstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connstr))
        {
            conn.Open();
            using (SqlCommand cmd =new SqlCommand("Update Employees Set Photo = @Photo WHERE EmployeeID = @EmployeeID",conn))
            {
                //更新员工照片信息
                cmd.Parameters.AddWithValue("@EmployeeID", employeeId);
                cmd.Parameters.AddWithValue("@photo", photoFile);
                cmd.ExecuteNonQuery();
            }
        }
    }

     protected void DetailsView1_ItemUpdating(object sender, DetailsViewUpdateEventArgs e)
     {

     }
     protected void DetailsView1_ItemUpdated(object sender, DetailsViewUpdatedEventArgs e)
     {
         //获取当前的DetailsView实例
         DetailsView gridView = ((DetailsView)sender);
         //获取主键字段
         int employeeId = (int)e.Keys["EmployeeID"];
         //获取FileUpload控件
         FileUpload photoFile = (FileUpload)DetailsView1.Rows[0].FindControl("FileUpload1");
         //调用OperatePhoto方法上传图像
         OperatePhoto(employeeId, photoFile);
     }
}
