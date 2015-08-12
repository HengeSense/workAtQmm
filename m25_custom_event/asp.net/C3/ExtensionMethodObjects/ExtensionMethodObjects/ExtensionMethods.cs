using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ExtensionMethodObjects
{
    //1，定义一个静态类
    public static class ExtensionMethods
    {
        //2，定义一个静态方法，该方法扩展object对象。
        public static void SayHello(this object obj)
        {
            Console.WriteLine("你好，我是扩展方法！");
        }
    }
}
