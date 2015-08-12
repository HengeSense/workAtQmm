using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RestrictionsVar
{
    class Program
    {
        //错误，var只能出现在局部变量中。
        //private var myvar = 6;
        //var不能作为参数也不能用于返回值。
        //public var myVar(var x);
        static void Main(string[] args)
        {
            //错误，必须为隐式类型指定初始值
            //var intVar;
            //错误，不能为隐式声明指定null值。
            //var intVar = null;
            //不能直接对隐式声明的变量进行运算
            //var intVar = intVar + 1;
            //错误，不能同明声明多个隐式变量
            //var a = 5, b = 6;
        }      
    }
}
