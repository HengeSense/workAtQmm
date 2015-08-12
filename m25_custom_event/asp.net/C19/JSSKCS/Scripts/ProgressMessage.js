//注册JSSK命名空间
Type.registerNamespace("JSSK");
//定义ProgressMessage的构造函数，进行初始化工作。
JSSK.ProgressMessage=function(id)
{
    this._elementId=id;
    var element=$get(this._elementId);
    element.className="waitmessage";
    element.style.position="absolute";
    element.style.left=0;
    element.style.top=0;
}
//定义一个ProgressMessage类。在该类中定义两个方法
//ShowMessage用于显示指定ID值的控件，HideMessage用于隐藏指定ID值的控件
JSSK.ProgressMessage.prototype=
{
    ShowMessage:function(message)
    {
        var element=$get(this._elementId);
        if(element.innerText)
        {
            element.innerText=message;
        }
        else
        {
            element.textContent=message;
        }    
        element.style.visibility="visible";
    },
    HideMessage:function()
    {
        var element=$get(this._elementId);
        element.style.visibility="hidden";
    }
}
//注册客户端脚本类
JSSK.ProgressMessage.registerClass("JSSK.ProgressMessage");