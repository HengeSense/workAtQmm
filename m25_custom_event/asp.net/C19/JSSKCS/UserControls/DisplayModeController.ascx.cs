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
  //���浱ǰҳ���ϵ�WebPartManager�ؼ�
  WebPartManager manager;
  void Page_Init(object sender, EventArgs e)
  {
    //����InitComplete�¼�
    Page.InitComplete += new EventHandler(InitComplete);
  }    
  void InitComplete(object sender, System.EventArgs e)
  {
    //��ȡ��ǰҳ���ϵ�WebPartManager�ؼ�
    manager = WebPartManager.GetCurrentWebPartManager(Page);
    //��ȡWebPart��Ĭ������ʾģʽ����
    String browseModeName = WebPartManager.BrowseDisplayMode.Name;
      //������֧�ֵ���ʾģʽ������ģʽ������ӵ�DropDownListȥ��
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
    //��DropDownList�ؼ�ѡ��ı�ʱ���������¼�
     protected void DisplayModeDropdown_SelectedIndexChanged1(object sender, EventArgs e)
    {
         //��ȡ��ѡ�����ʾģʽ����
        String selectedMode = DisplayModeDropdown.SelectedValue;
         //���ݴ����ƻ�ȡ��ʾģʽ��������WebPartManager����ʾģʽΪ��ǰ��ѡ����ʾģʽ��
        WebPartDisplayMode mode = manager.SupportedDisplayModes[selectedMode];
        if (mode != null)
            manager.DisplayMode = mode;
    }
}
