using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ObjectInitializer
{
    class Program
    {
        static void Main(string[] args)
        {
            //Book book = new Book();
            //book.BookName = "ASP.NET 3.5程序设计";
            //book.ISBN = "0000000000";
            //book.Price = 59.8;

            //Book book = new Book()
            //{
            //    BookName = "ASP.NET 3.5程序设计",
            //    ISBN = "0000000000",
            //    Price = 59.8
            //};

            //Book book = new Book
            //{
            //    BookName = "ASP.NET 3.5程序设计",
            //    ISBN = "0000000000",
            //    Price = 59.8
            //};


            //Book book = new Book("编程书籍")
            //  {
            //      BookName = "ASP.NET 3.5程序设计",
            //      ISBN = "0000000000",
            //      Price = 59.8
            //  };
            //Console.WriteLine(book.ToString());
            //实例化MyBooks类，并使用对象初始化语法直接初始化内部成员
            MyBooks mybooks = new MyBooks
            {
                ProgramBook = new Book("编程书籍")
              {
                  BookName = "ASP.NET 3.5程序设计",
                  ISBN = "0000000000",
                  Price = 59.8
              },
                StoryBook = new Book("小说")
                {
                    BookName = "官场现形记",
                    ISBN = "1111111111",
                    Price = 59.8
                }
            };
            //控制台窗口输出
            Console.WriteLine(mybooks.ProgramBook.ToString() + Environment.NewLine + mybooks.StoryBook.ToString());
        }
        //一个简单的书籍类
        public class Book
        {
            //书的名称属性
            public string BookName { get; set; }
            //书的ISBN属性
            public string ISBN { get; set; }
            //书的价钱属性
            public double Price { get; set; }
            //保存书籍分类的私有成员
            private string _category = string.Empty;
            //自定义的构造函数
            public Book(string category)
            {
                _category = category;
            }
            public override string ToString()
            {
                return string.Format("书名：{0}，ISBN：{1}，价格：{2}，分类：{3}", BookName, ISBN, Price, _category);
            }
        }
        //笔者的书的类
        public class MyBooks
        {
            public Book ProgramBook { get; set; }
            public Book StoryBook { get; set; }
        }
    }
}
