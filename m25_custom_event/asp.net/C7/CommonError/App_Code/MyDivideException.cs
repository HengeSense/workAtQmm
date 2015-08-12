using System;
using System.Data;
using System.Configuration;
/// <summary>
///自定义的异常类
/// </summary>
public class MyDivideException:ApplicationException
{
    public MyDivideException()
        : base("注意，不要让被除数为0，己经产生了被0除错误！")
    {
    }
    public MyDivideException(string Message)
        : base(Message)
    { 
    }
    public MyDivideException(string Message, Exception inner)
        : base(Message, inner)
    { 
    }
}
