using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
public partial class DisplayModeMenu : System.Web.UI.UserControl
{
   //定义对当前宿主页面上的WebPartManager的引用的私有变量
   private WebPartManager _manager;
   protected void Page_Init(object sender, EventArgs e)
    {
        Page.InitComplete += new EventHandler(InitComplete);        
    }
    /// <summary>
   /// //当页面初始化完成时，加载页面去持的显示模式到DropDownList控件中，并初始化个性化选择
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
  private void InitComplete(object sender, System.EventArgs e)
   {
       //获取当前页面上的WebPartManager对象实例
       _manager = WebPartManager.GetCurrentWebPartManager(Page);
       //获取浏览模式的名称
       String browseModeName = WebPartManager.BrowseDisplayMode.Name;
       ////遍历页面上所有可用的显示模式的集合，添加到DropDownList控件中 
       foreach (WebPartDisplayMode mode in _manager.SupportedDisplayModes)
       {
           String modeName = mode.Name;
           // 添加前确保该模式允许添加
           if (mode.IsEnabled(_manager))
           {
               ListItem item = new ListItem(modeName, modeName);
               DisplayModeDropdown.Items.Add(item);
           }
       }
      //-----------------------------------------------------------------------------
      //如果该用户被指定为共享范围，则显示配置面板，为当前用户选择合相应的用户范围
      //否则隐藏配置面板。
       if (_manager.Personalization.CanEnterSharedScope)
       {
           Panel2.Visible = true;
           if (_manager.Personalization.Scope == PersonalizationScope.User)
               RadioButton1.Checked = true;
           else
               RadioButton2.Checked = true;
       }
   }


  // 重置当前页面中的所有的个性化设置
  protected void LinkButton1_Click(object sender, EventArgs e)
  {
      _manager.Personalization.ResetPersonalizationState();
  }

  // 如果当前为共享模式，则切换到用户模式。
  protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
  {
      if (_manager.Personalization.Scope == PersonalizationScope.Shared)
          _manager.Personalization.ToggleScope();
  }

  //// 如果当前为用户模式，则切换到共享模式。
  protected void RadioButton2_CheckedChanged(object sender, EventArgs e)
  {
      if (_manager.Personalization.CanEnterSharedScope &&
          _manager.Personalization.Scope == PersonalizationScope.User)
          _manager.Personalization.ToggleScope();
  }
    /// <summary>
    /// 在UI控件呈现之前，将DropDownList控件的选择项设为指定的模式。
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
  protected void Page_PreRender(object sender, EventArgs e)
  {
      ListItemCollection items = DisplayModeDropdown.Items;
      int selectedIndex =items.IndexOf(items.FindByText(_manager.DisplayMode.Name));
      DisplayModeDropdown.SelectedIndex = selectedIndex;      
  }
    /// <summary>
  /// 当DropDownList选择项发生改变时，设置WebPartManager控件的显示模式
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void DisplayModeDropdown_SelectedIndexChanged(object sender, EventArgs e)
    {
        String selectedMode = DisplayModeDropdown.SelectedValue;
        //根据选定的字符串值，获取页面的显示模式
        WebPartDisplayMode mode = _manager.SupportedDisplayModes[selectedMode];
        if (mode != null)
            _manager.DisplayMode = mode;
    }
}
