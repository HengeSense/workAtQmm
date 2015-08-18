﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行库版本:2.0.50727.1433
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;



[System.Data.Linq.Mapping.DatabaseAttribute(Name="Northwind")]
public partial class ProductsDataContext : System.Data.Linq.DataContext
{
	
	private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
	
  #region Extensibility Method Definitions
  partial void OnCreated();
  partial void InsertProducts(Products instance);
  partial void UpdateProducts(Products instance);
  partial void DeleteProducts(Products instance);
  #endregion
	
	public ProductsDataContext() : 
			base(global::System.Configuration.ConfigurationManager.ConnectionStrings["NorthwindConnectionString1"].ConnectionString, mappingSource)
	{
		OnCreated();
	}
	
	public ProductsDataContext(string connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ProductsDataContext(System.Data.IDbConnection connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ProductsDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ProductsDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public System.Data.Linq.Table<Products> Products
	{
		get
		{
			return this.GetTable<Products>();
		}
	}
	//Function特性指定将与数据库中的CustOrdersDetail表相关联 
	[Function(Name="dbo.CustOrdersDetail")]
    //CustOrdersDetailResult这个类用于获取存储过程的返回结果的类，Parameter用于指定映射到存储过程的参数
	public ISingleResult<CustOrdersDetailResult> CustOrdersDetail([Parameter(Name="OrderID", DbType="Int")] System.Nullable<int> orderID)
	{
        //调用DataContext类的ExecuteMethodCall方法执行存储过程。
		IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), orderID);
		return ((ISingleResult<CustOrdersDetailResult>)(result.ReturnValue));
	}
}

[Table(Name="dbo.Products")]
public partial class Products : INotifyPropertyChanging, INotifyPropertyChanged
{
	
	private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
	
	private int _ProductID;
	
	private string _ProductName;
	
	private System.Nullable<int> _SupplierID;
	
	private System.Nullable<int> _CategoryID;
	
	private string _QuantityPerUnit;
	
	private System.Nullable<decimal> _UnitPrice;
	
	private System.Nullable<short> _UnitsInStock;
	
	private System.Nullable<short> _UnitsOnOrder;
	
	private System.Nullable<short> _ReorderLevel;
	
	private bool _Discontinued;
	
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnProductIDChanging(int value);
    partial void OnProductIDChanged();
    partial void OnProductNameChanging(string value);
    partial void OnProductNameChanged();
    partial void OnSupplierIDChanging(System.Nullable<int> value);
    partial void OnSupplierIDChanged();
    partial void OnCategoryIDChanging(System.Nullable<int> value);
    partial void OnCategoryIDChanged();
    partial void OnQuantityPerUnitChanging(string value);
    partial void OnQuantityPerUnitChanged();
    partial void OnUnitPriceChanging(System.Nullable<decimal> value);
    partial void OnUnitPriceChanged();
    partial void OnUnitsInStockChanging(System.Nullable<short> value);
    partial void OnUnitsInStockChanged();
    partial void OnUnitsOnOrderChanging(System.Nullable<short> value);
    partial void OnUnitsOnOrderChanged();
    partial void OnReorderLevelChanging(System.Nullable<short> value);
    partial void OnReorderLevelChanged();
    partial void OnDiscontinuedChanging(bool value);
    partial void OnDiscontinuedChanged();
    #endregion
	
	public Products()
	{
		OnCreated();
	}
	
	[Column(Storage="_ProductID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
	public int ProductID
	{
		get
		{
			return this._ProductID;
		}
		set
		{
			if ((this._ProductID != value))
			{
				this.OnProductIDChanging(value);
				this.SendPropertyChanging();
				this._ProductID = value;
				this.SendPropertyChanged("ProductID");
				this.OnProductIDChanged();
			}
		}
	}
	
	[Column(Storage="_ProductName", DbType="NVarChar(40) NOT NULL", CanBeNull=false)]
	public string ProductName
	{
		get
		{
			return this._ProductName;
		}
		set
		{
			if ((this._ProductName != value))
			{
				this.OnProductNameChanging(value);
				this.SendPropertyChanging();
				this._ProductName = value;
				this.SendPropertyChanged("ProductName");
				this.OnProductNameChanged();
			}
		}
	}
	
	[Column(Storage="_SupplierID", DbType="Int")]
	public System.Nullable<int> SupplierID
	{
		get
		{
			return this._SupplierID;
		}
		set
		{
			if ((this._SupplierID != value))
			{
				this.OnSupplierIDChanging(value);
				this.SendPropertyChanging();
				this._SupplierID = value;
				this.SendPropertyChanged("SupplierID");
				this.OnSupplierIDChanged();
			}
		}
	}
	
	[Column(Storage="_CategoryID", DbType="Int")]
	public System.Nullable<int> CategoryID
	{
		get
		{
			return this._CategoryID;
		}
		set
		{
			if ((this._CategoryID != value))
			{
				this.OnCategoryIDChanging(value);
				this.SendPropertyChanging();
				this._CategoryID = value;
				this.SendPropertyChanged("CategoryID");
				this.OnCategoryIDChanged();
			}
		}
	}
	
	[Column(Storage="_QuantityPerUnit", DbType="NVarChar(20)")]
	public string QuantityPerUnit
	{
		get
		{
			return this._QuantityPerUnit;
		}
		set
		{
			if ((this._QuantityPerUnit != value))
			{
				this.OnQuantityPerUnitChanging(value);
				this.SendPropertyChanging();
				this._QuantityPerUnit = value;
				this.SendPropertyChanged("QuantityPerUnit");
				this.OnQuantityPerUnitChanged();
			}
		}
	}
	
	[Column(Storage="_UnitPrice", DbType="Money")]
	public System.Nullable<decimal> UnitPrice
	{
		get
		{
			return this._UnitPrice;
		}
		set
		{
			if ((this._UnitPrice != value))
			{
				this.OnUnitPriceChanging(value);
				this.SendPropertyChanging();
				this._UnitPrice = value;
				this.SendPropertyChanged("UnitPrice");
				this.OnUnitPriceChanged();
			}
		}
	}
	
	[Column(Storage="_UnitsInStock", DbType="SmallInt")]
	public System.Nullable<short> UnitsInStock
	{
		get
		{
			return this._UnitsInStock;
		}
		set
		{
			if ((this._UnitsInStock != value))
			{
				this.OnUnitsInStockChanging(value);
				this.SendPropertyChanging();
				this._UnitsInStock = value;
				this.SendPropertyChanged("UnitsInStock");
				this.OnUnitsInStockChanged();
			}
		}
	}
	
	[Column(Storage="_UnitsOnOrder", DbType="SmallInt")]
	public System.Nullable<short> UnitsOnOrder
	{
		get
		{
			return this._UnitsOnOrder;
		}
		set
		{
			if ((this._UnitsOnOrder != value))
			{
				this.OnUnitsOnOrderChanging(value);
				this.SendPropertyChanging();
				this._UnitsOnOrder = value;
				this.SendPropertyChanged("UnitsOnOrder");
				this.OnUnitsOnOrderChanged();
			}
		}
	}
	
	[Column(Storage="_ReorderLevel", DbType="SmallInt")]
	public System.Nullable<short> ReorderLevel
	{
		get
		{
			return this._ReorderLevel;
		}
		set
		{
			if ((this._ReorderLevel != value))
			{
				this.OnReorderLevelChanging(value);
				this.SendPropertyChanging();
				this._ReorderLevel = value;
				this.SendPropertyChanged("ReorderLevel");
				this.OnReorderLevelChanged();
			}
		}
	}
	
	[Column(Storage="_Discontinued", DbType="Bit NOT NULL")]
	public bool Discontinued
	{
		get
		{
			return this._Discontinued;
		}
		set
		{
			if ((this._Discontinued != value))
			{
				this.OnDiscontinuedChanging(value);
				this.SendPropertyChanging();
				this._Discontinued = value;
				this.SendPropertyChanged("Discontinued");
				this.OnDiscontinuedChanged();
			}
		}
	}
	
	public event PropertyChangingEventHandler PropertyChanging;
	
	public event PropertyChangedEventHandler PropertyChanged;
	
	protected virtual void SendPropertyChanging()
	{
		if ((this.PropertyChanging != null))
		{
			this.PropertyChanging(this, emptyChangingEventArgs);
		}
	}
	
	protected virtual void SendPropertyChanged(String propertyName)
	{
		if ((this.PropertyChanged != null))
		{
			this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
}

public partial class CustOrdersDetailResult
{
	
	private string _ProductName;
	
	private decimal _UnitPrice;
	
	private short _Quantity;
	
	private System.Nullable<int> _Discount;
	
	private System.Nullable<decimal> _ExtendedPrice;
	
	public CustOrdersDetailResult()
	{
	}
	
	[Column(Storage="_ProductName", DbType="NVarChar(40) NOT NULL", CanBeNull=false)]
	public string ProductName
	{
		get
		{
			return this._ProductName;
		}
		set
		{
			if ((this._ProductName != value))
			{
				this._ProductName = value;
			}
		}
	}
	
	[Column(Storage="_UnitPrice", DbType="Money NOT NULL")]
	public decimal UnitPrice
	{
		get
		{
			return this._UnitPrice;
		}
		set
		{
			if ((this._UnitPrice != value))
			{
				this._UnitPrice = value;
			}
		}
	}
	
	[Column(Storage="_Quantity", DbType="SmallInt NOT NULL")]
	public short Quantity
	{
		get
		{
			return this._Quantity;
		}
		set
		{
			if ((this._Quantity != value))
			{
				this._Quantity = value;
			}
		}
	}
	
	[Column(Storage="_Discount", DbType="Int")]
	public System.Nullable<int> Discount
	{
		get
		{
			return this._Discount;
		}
		set
		{
			if ((this._Discount != value))
			{
				this._Discount = value;
			}
		}
	}
	
	[Column(Storage="_ExtendedPrice", DbType="Money")]
	public System.Nullable<decimal> ExtendedPrice
	{
		get
		{
			return this._ExtendedPrice;
		}
		set
		{
			if ((this._ExtendedPrice != value))
			{
				this._ExtendedPrice = value;
			}
		}
	}
}
#pragma warning restore 1591