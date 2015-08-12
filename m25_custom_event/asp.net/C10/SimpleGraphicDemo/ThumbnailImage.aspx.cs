using System;
//导入命名空间
using System.Drawing;
public partial class ThumbnailImage : System.Web.UI.Page
{
    //定义一个表示缩略图高度的常量
    const int ImageHight = 120;
    protected void Page_Load(object sender, EventArgs e)
    {
        Image pic = Image.FromFile(Server.MapPath("~/Images/Image0.jpg"));
        //根据图像的固定高度计算图像的宽度，实现比例缩放
        int ImageWidth = Convert.ToInt32(Math.Round((Convert.ToDouble(ImageHight) / pic.Height) * pic.Width));
        //调用GetThumbnailImage方法获取图像的缩略图。
        Image thumbnailImage = pic.GetThumbnailImage(ImageWidth, ImageHight, null, IntPtr.Zero);
        //将缩略图保存到输出流中
        thumbnailImage.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Png);
    }         
}
