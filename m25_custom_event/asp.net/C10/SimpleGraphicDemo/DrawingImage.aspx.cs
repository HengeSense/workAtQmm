﻿using System;
//导入命名空间
using System.Drawing;
public partial class DrawingImage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //1，新建一个Bitmap对象
        using (Bitmap image = new Bitmap(300, 300))
        {
            //2，根据Bitmap对象创建一个相关的Graphics对象，用于绘制。
            using (Graphics g = Graphics.FromImage(image))
            {
                //3，调用Graphics的FillRectangle方法来绘制一个矩形。
                g.FillRectangle(Brushes.White, 1, 1, 295, 295);
                //初始化一个字体
                Font font = new Font("Verdana", 18, FontStyle.Regular);
                //调用DrawingString方法在画布上绘制文本。
                g.DrawString("绘制显示现有的图片", font, Brushes.Silver, 10, 5);
                //-------------------------------------------------------------------------
                //从指定的文件中构造Image对象。
                Image pic = Image.FromFile(Server.MapPath("~/Images/Image0.jpg"));
                //调用Graphics对象的DrawingImage方法在指定的画布位置绘制指定大小的图象。
                //g.DrawImage(pic, 10, 45, 200, 200);
                g.DrawImageUnscaled(pic, 10, 45, 200, 200);
                //-------------------------------------------------------------------------
                //3，将图像以Gif格式保存到指定的输入二进制流中
                image.Save(Response.OutputStream, System.Drawing.Imaging.ImageFormat.Gif);
            }
        }
    }
}
