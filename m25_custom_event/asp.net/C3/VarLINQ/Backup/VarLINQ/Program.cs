using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace VarLINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 1, 4, 6, 8, 10, 20, 30, 33, 27, 13, 12 };
            //使用LINQ查询语法查询数组中的偶数
            var querySet = from i in numbers where i%2==0 select i;
            Console.WriteLine("查询结果为:");
            //遍历查询结果结，并在屏幕上输出
            foreach (var i in querySet)
            {
                Console.Write("{0}，", i);
            }
            Console.WriteLine();
            Console.WriteLine("查询结果类型为：{0}", querySet.GetType().Name);
            Console.WriteLine("查询结果类型定义在{0}命名空间", querySet.GetType().Namespace);
        }
    }
}
