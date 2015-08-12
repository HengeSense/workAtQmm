<%@ Application Language="C#" %>

<script runat="server">

    void Application_Start(object sender, EventArgs e) 
    {
        //在应用程序启动时运行的代码

    }
    
    void Application_End(object sender, EventArgs e) 
    {
        //在应用程序关闭时运行的代码

    }
        
    void Application_Error(object sender, EventArgs e) 
    { 
        //在出现未处理的错误时运行的代码

    }

    void Session_Start(object sender, EventArgs e) 
    {
        //在新会话启动时运行的代码

    }

    void Session_End(object sender, EventArgs e) 
    {
        //在会话结束时运行的代码。 
        // 注意: 只有在 Web.config 文件中的 sessionstate 模式设置为
        // InProc 时，才会引发 Session_End 事件。如果会话模式 
        //设置为 StateServer 或 SQLServer，则不会引发该事件。

    }
    /// <summary>
    /// 重载GetVaryByCustomString方法，创建自定义的缓存策略
    /// </summary>
    /// <param name="context">当前HTTP上下文</param>
    /// <param name="arg">VaryByCustom的属性值</param>
    /// <returns></returns>
    public override string GetVaryByCustomString(HttpContext context, string arg)
    {
        // 检查VaryByCustom的字符串值
        if (arg == "browser")
        {
            //获取当前的浏览器版本
            string browserName;
            browserName = Context.Request.Browser.Browser;
            browserName += Context.Request.Browser.MajorVersion.ToString();
            // 必须返回一个字符串，该字符串指定浏览器类型，这样ASP.NET将根据该字符串的不同来缓存不同的版本。
            return browserName;
        }
        else
        {
            //调用基类的缓存处理方法
            return base.GetVaryByCustomString(context, arg);
        }
    }
       
</script>
