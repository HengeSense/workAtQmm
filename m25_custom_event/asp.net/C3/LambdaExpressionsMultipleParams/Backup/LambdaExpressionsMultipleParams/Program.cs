using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LambdaExpressionsMultipleParams
{
    class Program
    {
        static void Main(string[] args)
        {
            //实例化一个书籍库存类
            BookStock bkstock = new BookStock();
            //SetOutStockHandler方法需要一个委托，该委托要传递2个参数到Lambda表达式
            bkstock.SetOutStockHandler((bookname, price) => Console.WriteLine("售出的书名是：{0}，书籍价格是：{1}", bookname, price));
            //调用SellBook卖出书籍
            bkstock.SellBook("C# 3.5程序设计", 59.8);            
        }
    }

    //定义一个使用委托的书籍库存类
    public class BookStock
    {
        //定义一个出库委托
        public delegate void OutStock(string BookName, double price);
        private OutStock testOutStock;
        //设定出库委脱的函数指针
        public void SetOutStockHandler(OutStock target)
        {
            testOutStock = target;
        }
        //当卖书时，调用出库方法
        public void SellBook(string BookName, double price)
        {
            if (testOutStock != null)
                testOutStock.Invoke(BookName, price);
        }
    }
}
