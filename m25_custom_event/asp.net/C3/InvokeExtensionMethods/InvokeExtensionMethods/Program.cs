using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace InvokeExtensionMethods
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 123456;
            //实例方法调用，直接用扩展的类的对象实例来进行调用 
            Console.WriteLine("实例方法调用，反转后的值为：{0}", i.ReverseDigits());
            //静态方法调用，通过调用扩展方法的静态类名再加扩展方法进行调用
            Console.WriteLine("静态方法调用，反转后的值为：{0}", ExtensionMethods.ReverseDigits(i));
        }
    }
    //定义一个简单的汽车类
    public class Car
    {
        public int Speed;
        public int SpeedUp()
        {
            return ++Speed;
        }
    }
}
