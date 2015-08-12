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

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        int x = 5;
        int y = 0;
        try
        {
            //故意被0除，产生一个异常
            int z = x / y;
        }
        catch (DivideByZeroException ex)
        {
            Label1.Text = "产生了一个异常，由异常处理器返回的信息是：" + ex.Message;
        }
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        int x = 5;
        int y = 0;
        try
        {
            //故意被0除，产生一个异常
            int z = x / y;
        }
        catch (DivideByZeroException ex)
        {
            Label1.Text = "产生了一个异常，由异常处理器返回的信息是：" + ex.Message;
        }
        catch (ArgumentNullException ex)
        {
            Label1.Text = "产生了一个异常，由异常处理器返回的信息是：" + ex.Message;
        }
        catch (Exception ex)
        {
            Label1.Text = "产生了一个异常，由异常处理器返回的信息是：" + ex.Message;
        }
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
        try
        {
            Divide(10,0);
        }
        catch (Exception ex)
        {
            Label3.Text = "产生的异常信息如下：<br/>";
            Label3.Text += ex.Message + "<br/>";
            ////直接使用InnerException属性可以获取内部异常的信息
            Label3.Text += ex.InnerException.Message;
        }
    }
    //div方法将抛出其产生的异常，并传递内部异常
    private double Divide(int x, int y)
    {
        try
        {
           return DivideOperation(x, y);
        }
        catch (Exception ex)
        {
            //使用Exception重载的构造函数传递内部异常
            throw new Exception("来自Divide方法的异常", ex);
        }
    }
    ////产生一个被零0除的异常
    private double DivideOperation(int x, int y)
    {
        try
        {
            return x / y;
        }
        catch (DivideByZeroException ex)
        {
            throw new DivideByZeroException("产生了一个试图除以零的异常，来自DivideOperation方法！");
        }
    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        try
        {
            //简单的抛出异常，让catch块进行捕捉
            throw new MyDivideException();
        }
        catch (MyDivideException ex)
        {
            Label4.Text = ex.Message;
        }
        finally
        { 
            ////无论如何，finally总会得到执行
            Label4.Text += "<br/><br/>finally块中的代码执行时间：" + DateTime.Now.ToShortTimeString();
        }
    }
}
