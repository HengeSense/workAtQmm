using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ExtensionInterfaceMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            //使用接口变量来调用扩展方法
            IBasicInterface bii = new BasicImplement();
            bii.SubStract(9, 3);            
        }
    }
    //先创建一个简单的接口
    public interface IBasicInterface
    {
        int Add(int x, int y);
    }
    //创建一个实现该接口的类
    public class BasicImplement : IBasicInterface
    {
        #region IBasicInterface 成员
        public int Add(int x, int y)
        {
            return x + y;
        }
        #endregion
    }
}
