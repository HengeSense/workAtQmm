using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class LayoutController : System.Web.UI.UserControl
{
  //保存当前页面上的WebPartManager控件
  WebPartManager manager;
  void Page_Init(object sender, EventArgs e)
  {
    //关联InitComplete事件
    Page.InitComplete += new EventHandler(InitComplete);
  }    
  void InitComplete(object sender, System.EventArgs e)
  {
    //获取当前页面上的WebPartManager控件
    manager = WebPartManager.GetCurrentWebPartManager(Page);
    //获取WebPart的默认列显示模式名称
    String browseModeName = WebPartManager.BrowseDisplayMode.Name;
      //遍历所支持的显示模式，并将模式名称添加到DropDownList去。
    foreach (WebPartDisplayMode mode in manager.SupportedDisplayModes)
    {
      String modeName = mode.Name;
      if (mode.IsEnabled(manager))
      {
        ListItem item = new ListItem(modeName, modeName);
        DisplayModeDropdown.Items.Add(item);
      }
    }
  }
    //当DropDownList控件选项改变时，触发此事件
     protected void DisplayModeDropdown_SelectedIndexChanged1(object sender, EventArgs e)
    {
         //获取所选择的显示模式名称
        String selectedMode = DisplayModeDropdown.SelectedValue;
         //根据此名称获取显示模式，并设置WebPartManager的显示模式为当前所选择显示模式。
        WebPartDisplayMode mode = manager.SupportedDisplayModes[selectedMode];
        if (mode != null)
            manager.DisplayMode = mode;
    }
}
