using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace InvokeExtensionMethods
{
    //注意类的可见性级别，必须要在整个应用程序范围可见。
     public static  class ExtensionMethods
    {
         //扩展int类型，为其添加一个反转整数的能力。
         public static int ReverseDigits(this int i)
         {
             char[] digits = i.ToString().ToCharArray();
             Array.Reverse(digits);
             string newDigits = new string(digits);
             return int.Parse(newDigits);
         }
         //扩展Car类，为其添加一个SpeedDown方法
         public static int SpeedDown(this Car car)
         {
             //这样写将会产生一个编译时错误
             //return --Speed;
             //正确的方法应该是car.Speed;
             return --car.Speed;
         }
    }
}
