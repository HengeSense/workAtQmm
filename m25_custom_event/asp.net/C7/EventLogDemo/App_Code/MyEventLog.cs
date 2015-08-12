using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
//本示例需要添加如下的两个命名空间
using System.Collections.Generic;
using System.Diagnostics;
/// <summary>
///MyEventLog 代表事件日志中的日志项
/// </summary>
public class MyEventLog
{
	public MyEventLog(string entrytype,string message,DateTime generatetime,string logsource)
	{
        //日志类型
        EntryType = entrytype;
        //日志信息
        Message = message;
        //产生时间
        GeneratedTime = generatetime;
        //事件来源
        LogSource = logsource;
	}
    public string EntryType { get; set; }
    public string  Message { get; set; }
    public DateTime GeneratedTime { get; set; }
    public string LogSource { get; set; }
}
/// <summary>
/// 事件日志列表类，用于获取事件日志中指定日志名称的事件
/// </summary>
public class LogList : List<MyEventLog>
{    
    public LogList(string logName)
    {
        //如果日志不存在，引发异常
        if (!EventLog.Exists(logName))
        {
            throw new Exception("指定的日志名称" + logName + "不存在!");
        }
        else
        {
            //打开指定日志名称的日志
            EventLog log = new EventLog(logName);
            //遍历日志项
            foreach (EventLogEntry entry in log.Entries)
            {
                //构造一个myEventLog类并添加到日志列表中
                MyEventLog mel = new MyEventLog(entry.EntryType.ToString(), entry.Message, entry.TimeGenerated,entry.Source);
                this.Add(mel);
            }
        }
    }
}
