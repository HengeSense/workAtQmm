using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace implicitlyArrays
{
    class Program
    {
        static void Main(string[] args)
        {
            //整型数组
            var intVar = new[] { 1, 4, 6, 8 };
            Console.WriteLine("intVar数组的类型是：{0}", intVar.ToString());
            //字符串数组
            var strVar = new[] { "隐式", null, "类型", "数组" };
            Console.WriteLine("strVar数组的类型是：{0}", strVar.ToString());
            //二维数组
            var intArray = new[]{       
            new[]{1,2,3,4},
            new[]{5,6,7,8}
            };
            Console.WriteLine("intArray数组的类型是：{0}", intArray.ToString());
            // 字符串类型的二维数组
            var strArray = new[]{        
            new[]{"Luca", "Mads", "Luke", "Dinesh"},
            new[]{"Karen", "Suma", "Frances"}
            };
            Console.WriteLine("strArray数组的类型是：{0}", strArray.ToString());
        }
    }
}
