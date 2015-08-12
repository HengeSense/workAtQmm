using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace AnonymousTypesInfo
{
    class Program
    {
        static void Main(string[] args)
        {
            //定义一个匿名类型
            var book = new { BookName = "ASP.NET 4.0程序设计", ISBN = "1234567890", Price = 59.8 };
            GetAnonymousTypesInfo(book);
        }
        //定义一个静态方法获取匿名类型的相关信息 
        static void GetAnonymousTypesInfo(object obj)
        {
            Console.WriteLine("当前对象实例名为：{0}", obj.GetType().Name);
            Console.WriteLine("当前对象实例：{0}的基类是：{1}", obj.GetType().Name, obj.GetType().BaseType);
            Console.WriteLine("ToString()方法的结果是：{0}", obj.ToString());
            Console.WriteLine("GetHashCode()方法的结果是：{0}", obj.GetHashCode());
            Console.WriteLine();
        }
    }
}