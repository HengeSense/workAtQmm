using System;
using System.Drawing;
public partial class ThumbnailImageShow : System.Web.UI.Page
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
        thumbnailImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Gif);
    }    
}
