using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace LinqToSql
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            //DataContext用于从数据库中提取数据，并转换为对象，同时将更改写回数据库。
            PubsDataContext pdc = new PubsDataContext();
            var getSales=from allsales in pdc.sales
                         select allsales;
            dataGridView1.DataSource=getSales;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            PubsDataContext pdc = new PubsDataContext();
            var getsales = from wheresale in pdc.sales
                           where wheresale.qty > 20
                           // select wheresale;注释掉后添转换成如下的代码。
                           select new
                           {
                               数量乘以五=wheresale.qty*5
                           };
            dataGridView1.DataSource = getsales;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            PubsDataContext pdc = new PubsDataContext();
            //var titlesales = from ts in pdc.sales
            //                 select new
            //                 {
            //                     //在这里使用sales嵌套的titles表来获取titles表中的title记录
            //                     title=ts.titles.title,
            //                     qty=ts.qty
            //                 };
            var titlesales = from ts in pdc.sales
                             join titlestable in pdc.titles on ts.title_id equals titlestable.title_id
                             select new
                             {
                                 titlestable.title,ts.qty
                             };
            dataGridView1.DataSource = titlesales;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            PubsDataContext pdc = new PubsDataContext();
            var titlesales = from ts in pdc.sales
                             group ts by new {ts.titles.title} into gp
                             select new
                             {
                                 title=gp.Key.title,
                                 qty=gp.Sum(ts=>ts.qty)
                             };
            dataGridView1.DataSource = titlesales;
        }
    }
}
