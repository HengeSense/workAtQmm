//注册JSSK类
Type.registerNamespace("JSSK");
//定义一个HoverButton类的构造函数，需要传递ImgId,anchorId,baseImage,navigateUrl这四个参数。
JSSK.HoverButton=function(imgId,anchorId,baseImage,navigateUrl)
{
    //获取图像控件的ID
    this._elementId=imgId;
    //指定图像的基本路径
    this._baseImage=baseImage;
    //设置控件的导航路径
    $get(anchorId).href=navigateUrl;
    //设置Img标签的边框为0
    var element=$get(this._elementId);    
    element.border=0;
    //为各个事件指定事件委托实例
    element.onmouseover=Function.createDelegate(this,this.SetHover);
    element.onmouseout=Function.createDelegate(this,this.SetNormal);
    element.onmousedown=Function.createDelegate(this,this.SetPressed);
    element.onmouseup=Function.createDelegate(this,this.SetNormal);
    //默认情况下，设置按钮的显示状态为Normal
    this.SetNormal();        
}
//定义HoverButton类 
JSSK.HoverButton.prototype=
{
    //设置标准图像方法
    SetNormal:function()
    {
        var element=$get(this._elementId);
        element.src=this._baseImage + "N.jpg"
    },
    //设置鼠标按下图像
    SetPressed:function()
    {
        var element=$get(this._elementId);
        element.src=this._baseImage + "P.jpg"
    },
    //设置鼠标经过时的图像
    SetHover:function()
    {
        var element=$get(this._elementId);
        element.src=this._baseImage + "H.jpg"
    }
}
//注册HoverButton类
JSSK.HoverButton.registerClass("JSSK.HoverButton");

