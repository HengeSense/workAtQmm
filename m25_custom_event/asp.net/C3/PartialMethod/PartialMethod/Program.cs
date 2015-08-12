using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace PartialMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            //实例化一个新的Book类
            Book book = new Book();
            //调用BuyBook方法来购买书，并返回购买结果
            bool buybook = book.BuyBook("C# 4.0程序设计");
            if (buybook == true)
            {
                Console.WriteLine("你所购买的书己经购买成功了！");
            }
            else
            {
                Console.WriteLine("你所购买的书己经没有存货了！");
            }
        }
    }
}
