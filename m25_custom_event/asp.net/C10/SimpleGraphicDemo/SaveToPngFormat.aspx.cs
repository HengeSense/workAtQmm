using System;
using System.Drawing;
using System.IO;
public partial class SaveToPngFormat : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //从查询字符串中获取图片的高度
        int ImageHight = int.Parse(Request.QueryString["Height"]);
        Image pic = Image.FromFile(Server.MapPath("~/Images/Image0.jpg"));
        //根据图像的固定高度计算图像的宽度，实现比例缩放
        int ImageWidth = Convert.ToInt32(Math.Round((Convert.ToDouble(ImageHight) / pic.Height) * pic.Width));
        //调用GetThumbnailImage方法获取图像的缩略图。
        Image thumbnailImage = pic.GetThumbnailImage(ImageWidth, ImageHight, null, IntPtr.Zero);
        //将缩略图保存到输出流中
       // thumbnailImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Gif);
       //--------------------------------------------------------
        Response.ContentType = "image/png";
        MemoryStream msm = new MemoryStream();
        //先将Png图片保存到MemoryStream中，使流具有可检索的功能
        thumbnailImage.Save(msm, System.Drawing.Imaging.ImageFormat.Png);
        //然后输出图片到输入流。
        msm.WriteTo(Response.OutputStream);
        //注意使用完成释放资源
        thumbnailImage.Dispose();
        msm.Dispose();
    }
}