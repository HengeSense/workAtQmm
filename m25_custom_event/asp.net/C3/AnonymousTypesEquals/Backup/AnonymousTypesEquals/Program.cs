using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace AnonymousTypesEquals
{
    class Program
    {
        static void Main(string[] args)
        {
            //定义两个相同的匿名类型
            var Book1 = new { BookName = "ASP.NET 3.5 程序设计", ISBN = "123456789", Price = 59.8 };
            var Book2 = new { BookName = "ASP.NET 3.5 程序设计", ISBN = "123456789", Price = 59.8 };
            //使用重载的Equals方法进行两个匿名类型的等值比较
            if (Book1.Equals(Book2))
            {
                Console.WriteLine("两个匿名类型完全相等！");
            }
            else
            {
                Console.WriteLine("两个匿名类型不相等！");
            }
            //使用C#的==操作符进行两个类型的比较
            if (Book1==Book2)
            {
                Console.WriteLine("两个匿名类型完全相等！");
            }
            else
            {
                Console.WriteLine("两个匿名类型不相等！");
            }
            //查看Book1和Book2这两个匿名类型的内部信息
            GetAnonymousTypesInfo(Book1);
            GetAnonymousTypesInfo(Book2);
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
