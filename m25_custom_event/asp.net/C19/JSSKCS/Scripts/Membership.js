//注册JSSK命名空间，Membership将属于此命名空间。
Type.registerNamespace("JSSK");

//Membership类的构造函数
JSSK.Membership=function()
{
    this._waitId="";
    this._waitmsg=null;
}

JSSK.Membership.prototype=
{
    //定义一个WaitLableId的属性
    get_WaitLabelId:function()
    {
        return this._waitId;
    },
    set_WaitLabelId:function(value)
    {
        this._waitId=value;
    },
    //开始验证用户名和密码，这里调用Sys.Services.AuthenticationServices类的Login方法。
    BeginLogin:function(uid,pwd,rememberme)
    {
        //实例化ProgressMessage类
        this._waitmsg=new JSSK.ProgressMessage(this._waitId);
        //调用ProgressMessage类的ShowMessage方法来显示提示框
        this._waitmsg.ShowMessage("Signing in...");
        //注意这里创建了一个回调函数EndLogin，当验证完成时将执行这个函数来隐藏显示面板
        Sys.Services.AuthenticationService.login(uid,pwd,rememberme,null,null,Function.createDelegate(this,this.EndLogin),Function.createDelegate(this,this.OnError),null);
    },
    //当登录完成时，根据登录结果进一步处理。
    EndLogin:function(result,context,methodname)
    {
        if(result)
        {
        //登录成功时，调用BeginRoleLoad方法根据用户的角色来加载相应的网页。 
            this.BeginRoleLoad();
        }
        else
        {
        //如果登录失败，则隐藏信息显示框，并弹出一个无效的ID或密码的窗口
            this._waitmsg.HideMessage();
            alert("Invalid User ID or Password!");
        }
    },
    BeginLogout:function()
    {
    },
    EndLogout:function(result,context,methodname)
    {
    },
    //调用Sys.Services.RoleServices.load函数，在加载结束后调用EndRoleLoad方法，并在加载失败时调用OnError方法
    BeginRoleLoad:function()
    {
        Sys.Services.RoleService.load(Function.createDelegate(this,this.EndRoleLoad),Function.createDelegate(this,this.OnError));
    },
    //加载角色成功后，根据用户所属的不同角色，重定向到相应的页面
    EndRoleLoad:function(result)
    {
        if(this.IsUserInRole("jobseeker"))
        {
            window.location.href="jobseeker/jobsearch.aspx";
        }
        if(this.IsUserInRole("employer"))
        {
            window.location.href="employer/addeditposting.aspx";
        }
        if(this.IsUserInRole("admin"))
        {
            window.location.href="admin/default.aspx";
        }
    },
    //判断指定的角色是否可用
    IsUserInRole:function(roleName)
    {
        return Sys.Services.RoleService.isUserInRole(roleName);
    },
    //角色加载失败时显示的错误信息。
    OnError:function(result,context,methodname)
    {
        waitmsg.HideMessage();
        alert(err.get_message());
    }
}
//为了让类与命名空间产生关联，必须注册类。
JSSK.Membership.registerClass("JSSK.Membership");

