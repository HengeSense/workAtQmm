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
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Text;
using System.Drawing.Imaging;

public partial class WebDemo : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
            //用于绘制图片的绘图表面
            Bitmap bmpCanvas = new Bitmap(500,320);
            //生成Graphics对象用于绘制图形
            Graphics objGraphics = Graphics.FromImage(bmpCanvas);
            //开启图形和文字的防锯齿功能
            objGraphics.SmoothingMode = SmoothingMode.HighQuality;
            objGraphics.TextRenderingHint = TextRenderingHint.AntiAlias;
            //清除背景，使之具有一个白色的背景
            objGraphics.Clear(Color.White);
            //绘制背景线段
            objGraphics.DrawLine(Pens.Gray,50,250,50,50);
            objGraphics.DrawLine(Pens.Gray,50,250,450,250);
            objGraphics.DrawLine(Pens.Gray,50,250,10,280);
            //---------------------------------------------------------------
            //这里是数据来源区，通常建议从数据库中获取所需要的数据
            int Val1 = 4; int Val2 = 6; int Val3 = 1; 
            int Val4 = 7; int Val5 = 5;
            //绘制每个柱面
            this.DrawBar(objGraphics,Val1,0,"一月");
            this.DrawBar(objGraphics,Val2,1,"二月");
            this.DrawBar(objGraphics,Val3,2,"三月");
            this.DrawBar(objGraphics,Val4,3,"四月");
            this.DrawBar(objGraphics,Val5,4,"五月");
            //----------------------------------------------------------------
            //绘制生成时间
            objGraphics.DrawString("生成时间:"+DateTime.Now.ToString(),new Font("Arial",16),Brushes.Black,5,290);
            //选择内容文件类型
            Response.ContentType = "image/jpeg";
            bmpCanvas.Save(Response.OutputStream,ImageFormat.Jpeg);
            //释放资源
            bmpCanvas.Dispose();
            objGraphics.Dispose();
            Response.End();
         }
         private void DrawBar(Graphics objGraphics, 
            int Value, int BarNumber, string Label)
         {
            int intLeft   = (BarNumber*75)+60;
            int intBottom   = 275;
            int intHeight   = (25*Value);
             //绘制柱面
            objGraphics.FillRectangle(Brushes.Red,intLeft, 
               intBottom-intHeight,35,intHeight);
            //使用GraphicsPath方法绘制柱面顶层
            GraphicsPath pthTop = new GraphicsPath();
            pthTop.AddLine(intLeft-1, intBottom-intHeight, 
               intLeft+20, intBottom-intHeight-10);
            pthTop.AddLine(intLeft+55,intBottom-
               intHeight-10,intLeft+35,
               intBottom-intHeight);
            objGraphics.FillPath(Brushes.LightSalmon,
               pthTop);
            // 绘制柱面左侧
            GraphicsPath pthRight = new GraphicsPath();
            pthRight.AddLine(intLeft+35,intBottom-
               intHeight,intLeft+55,intBottom-
               intHeight-10);
            pthRight.AddLine(intLeft+55,
               intBottom-15,intLeft+35,intBottom);
            objGraphics.FillPath(Brushes.Firebrick,
               pthRight);
            //绘制标签
            objGraphics.TranslateTransform(intLeft+15,
               intBottom-intHeight - 30);
            objGraphics.RotateTransform(300);
            objGraphics.DrawString(Label,new 
               Font("Arial",10,FontStyle.Bold),
               Brushes.Black,0,0);
            objGraphics.ResetTransform();
         }
      }
