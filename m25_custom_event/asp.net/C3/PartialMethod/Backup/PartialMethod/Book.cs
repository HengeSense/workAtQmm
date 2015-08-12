using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace PartialMethod
{
    public partial class Book
    {
        public bool BuyBook(string BookName)
        {
            bool instock = false;
            //调用局部方法来判断所要购买的书是否有库存
            BookInStock(BookName,ref instock);
            return instock;            
        }
        //这是一个局部方法，在这里并没有提供任何方法的实现
        partial void BookInStock(string BookName,ref bool instock);
    }
}
