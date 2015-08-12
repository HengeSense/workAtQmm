using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace AutoPropertyDemo1
{
    class Program
    {
        static void Main(string[] args)
        {
            //实例化书籍类
            book bk = new book();
            //这行语句将产生一个编译时错误，因为是只读的自动属性
            //bk.BookName = "C# 3.5 程序设计技术";
            Console.WriteLine("读取自动属性的值：{0}", bk.BookName);
        }
    }
    //一个简单的书籍类
    public class book
    {
        //只读的BookName属性
        public string BookName { get; private set; }
        //定义一个ISBN的属性
        private string _isbn="00001";
        public string ISBN
        {
            get { return _isbn; }
            private set { _isbn = value; }
        }
        //在类的构造函数中，为自动属性赋了初始值
        public book()
        { 
            BookName= "C# 3.5 程序设计技术";
        }
    }
}
