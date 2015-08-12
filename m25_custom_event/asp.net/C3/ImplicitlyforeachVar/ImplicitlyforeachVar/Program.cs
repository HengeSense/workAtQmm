using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ImplicitlyforeachVar
{
    class Program
    {
        static void Main(string[] args)
        {
            var NumbersArray = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };
            //这里在foreach循环中使用隐式类型的变量
            foreach (var number in NumbersArray)
            {
                Console.WriteLine("当前的类型为{0}，值为{1}", number.GetType().ToString(),number);
            }
        }
    }
}
