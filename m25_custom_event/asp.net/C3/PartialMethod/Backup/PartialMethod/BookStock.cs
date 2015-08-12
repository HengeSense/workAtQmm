using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace PartialMethod
{
    public partial class Book
    {
        //局部类中的局部方法，根据书名判断存货
        partial void BookInStock(string BookName, ref bool instock)
        {
            if (BookName == "ASP.NET 3.5开发人员指南")
            {
                instock = true;
            }
            else
            {
                instock = false;
            }
        }
    }
}
