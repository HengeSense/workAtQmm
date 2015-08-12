using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace ImplicitlyLocalVars
{
    class Program
    {
        static void Main(string[] args)
        {
            //显式类型的变量声明 
            //int intVar = 0;
            //string strVar = "这是显式类型的变量声明";
            //bool boolVar = true;
            //Console.WriteLine("显式类型的变量声明输出：");
            //Console.WriteLine("int={0},string={1},bool={2}",intVar,strVar,boolVar);
            //显式类型的变量声明
            var intVar = 0;
            var strVar = "这是隐式类型的变量声明";
            var boolVar = true;
            Console.WriteLine("隐式类型的变量声明输出：");
            Console.WriteLine("int={0},string={1},bool={2}", intVar, strVar, boolVar);
        }
    }
}
