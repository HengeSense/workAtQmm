using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ExtensionInterfaceMethod
{
    public static class ExtensionMethodClass
    {
        public static int SubStract(this IBasicInterface basicinterface, int x, int y)
        {
            //尽管是扩展一个接口，但是还是必须添加对方法的实现
            return x - y;
        }
    }
}
