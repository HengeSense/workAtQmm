using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CollectionInitializer
{
    class Program
    {
        static void Main(string[] args)
        {
            //初始化一个数组
            int[] intArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            //初始化一个泛型列表
            List<int> intList = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };
            //初始化一个ArrayList
            System.Collections.ArrayList al = new System.Collections.ArrayList { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            //初始化一个泛型集合类
            List<Book> books = new List<Book>
            {
              new Book("编程书籍")
              {
                  BookName = "ASP.NET 3.5程序设计",
                  ISBN = "0000000000",
                  Price = 59.8
              },
              new Book("小说")
              {
                  BookName = "官场现形记",
                  ISBN = "1111111111",
                  Price = 59.8
              },
              new Book("编程书籍")
              {
                  BookName = "C# 2.0完全手册",
                  ISBN = "2222222222",
                  Price = 59.8
              }
            };
        }
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

}
