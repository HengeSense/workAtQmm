using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace AnonymousTypesDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            ////初始化一个Book类的实例
            //Book book = new Book();
            //book.BookName = "C# 2.0应用开发详解";
            //book.ISBN = "1234567890";
            //book.Price = 59.8;
            ////在控制台窗口中进行显示
            //Console.WriteLine("书名是：{0}，ISBN编号是：{1}，价格是：{2}", book.BookName, book.ISBN, book.Price);
            var book = new { BookName = "C# 2.0应用开发详解", ISBN = "1234567890", Price = 59.8 };
            Console.WriteLine("书名是：{0}，ISBN编号是：{1}，价格是：{2}", book.BookName, book.ISBN, book.Price);
        }
    }
    //定义了一个简单的书籍类
    public class Book
    {
        public string  BookName { get; set; }
        public string  ISBN { get; set; }
        public double Price { get; set; }
    }
}
