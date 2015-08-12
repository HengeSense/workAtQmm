using System;
using System.Drawing;
using System.Text;
using System.Drawing.Drawing2D;

public partial class SmoothImage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //新建一个Bitmap对象
        using (Bitmap image = new Bitmap(300, 200))
        {
            //根据Bitmap对象创建一个相关的Graphics对象，用于绘制。
            using (Graphics g = Graphics.FromImage(image))
            {
                //调用Graphics的FillRectangle方法来绘制一个矩形。
                g.FillRectangle(Brushes.White, 1, 1, 295, 195);
                //初始化一个字体
                Font font = new Font("Verdana",20, FontStyle.Regular|FontStyle.Bold);
                Pen pen = new Pen(Brushes.Black, 8);
                Rectangle rec=new Rectangle(10, 60, 220, 100);
                //设置SmoothingMode为支持抗锯齿功能
                g.SmoothingMode = SmoothingMode.AntiAlias;
                //为文字添加防锯齿效果
                g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;
                g.DrawEllipse(pen,rec);
                g.FillEllipse(Brushes.Green, rec);
                //调用DrawingString方法在画布上绘制文本。
                g.DrawString("使用GDI+绘图", font, Brushes.Silver, 5, 2);
                Image icon = Image.FromFile(Server.MapPath("~/Images/A001.bmp"));
                g.DrawImage(icon, 210, 10, 80, 50);
                //将图像以Gif格式保存到指定的输入二进制流中
                image.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Jpeg);
            }
        }
    }
}
