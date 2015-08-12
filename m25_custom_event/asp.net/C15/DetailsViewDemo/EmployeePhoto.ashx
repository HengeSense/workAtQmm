<%@ WebHandler Language="C#" Class="EmployeePhoto" %>
using System;
using System.Web;
//添加如下的命名空间
using System.IO;
using System.Drawing.Imaging;
using System.Drawing;
using System.Data.SqlClient;
using System.Web.Configuration;
//本处理程序显示Northwind数据库中的照片
public class EmployeePhoto : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {
        //Northwind图像字段的特殊性，需要为图像字段偏移一个OEF头字节信息
        const int oleOffset = 78;
        const int oleTypeStart = 20;
        const int oleTypeLength = 12;
        string EmployeeID;
        string sql;
        Bitmap bmp;
        byte[] imageBytes;
        //从查询字符串中获取员工ID信息
        EmployeeID = (string)context.Request.QueryString["EmployeeID"];
        if (EmployeeID == null) return;
        //使用员工ID信息查询数据
        sql = "Select Photo from Employees where EmployeeID=@EmployeeID";
        //从Web.Config文件中读取配置信息，请改为你自己的连接
        string connectionstr = WebConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
        using (SqlConnection cn = new SqlConnection(connectionstr))
        {
            using (SqlCommand cmd = new SqlCommand(sql, cn))
            {
                cn.Open();
                cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    dr.Read();
                    //获取图像字段的字节数组
                    imageBytes = (byte[])dr.GetValue(0);
                }
            }
        }
        if (imageBytes == null || imageBytes.Length == 0) return;
        MemoryStream tempStream;
        string type = System.Text.Encoding.ASCII.GetString(imageBytes, oleTypeStart, oleTypeLength);
        if (type == "Bitmap Image")
        {
            tempStream = new MemoryStream(imageBytes, oleOffset, imageBytes.Length - oleOffset);
        }
        else
        {
            tempStream = new MemoryStream(imageBytes, 0, imageBytes.Length);
        }
        bmp = new Bitmap(tempStream);
        //可以使用下面的代码调整图像的大小
        bmp = new Bitmap(bmp, bmp.Height / 2, bmp.Width / 2);
        context.Response.ContentType = "image/jpeg";
        bmp.Save(context.Response.OutputStream, ImageFormat.Jpeg);
        context.Response.End();
    }
    public bool IsReusable {
        get {
            return false;
        }
    }

}