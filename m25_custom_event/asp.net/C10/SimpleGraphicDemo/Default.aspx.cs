using System;
//导入命名空间
using System.Drawing;
public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //1，新建一个Bitmap对象
        using (Bitmap image = new Bitmap(300, 50))
        {
            //2，根据Bitmap对象创建一个相关的Graphics对象，用于绘制。
            using (Graphics g = Graphics.FromImage(image))
            {
                //3，调用Graphics的FillRectangle方法来绘制一个矩形。
                g.FillRectangle(Brushes.White, 1, 1, 295, 45);
                //初始化一个字体
                Font font = new Font("Verdana", 20, FontStyle.Regular);
                //调用DrawingString方法在画布上绘制文本。
                g.DrawString("使用GDI+绘图", font, Brushes.Silver, 10, 5);
                Image icon = Image.FromFile(Server.MapPath("~/Images/A001.bmp"));
                g.DrawImage(icon, 240, 0,80, 50);
                //3，将图像以Gif格式保存到指定的输入二进制流中
                image.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Gif);
            }
        }
    }
}
