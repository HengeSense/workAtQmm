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



[System.Data.Linq.Mapping.DatabaseAttribute(Name="PUBS")]
public partial class PubsDataContext : System.Data.Linq.DataContext
{
	
	private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
	
  #region Extensibility Method Definitions
  partial void OnCreated();
  partial void Insertauthors(authors instance);
  partial void Updateauthors(authors instance);
  partial void Deleteauthors(authors instance);
  #endregion
	
	public PubsDataContext() : 
			base(global::System.Configuration.ConfigurationManager.ConnectionStrings["PUBSConnectionString"].ConnectionString, mappingSource)
	{
		OnCreated();
	}
	
	public PubsDataContext(string connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public PubsDataContext(System.Data.IDbConnection connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public PubsDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public PubsDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public System.Data.Linq.Table<authors> authors
	{
		get
		{
			return this.GetTable<authors>();
		}
	}
}

[Table(Name="dbo.authors")]
public partial class authors : INotifyPropertyChanging, INotifyPropertyChanged
{
	
	private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
	
	private string _au_id;
	
	private string _au_lname;
	
	private string _au_fname;
	
	private string _phone;
	
	private string _address;
	
	private string _city;
	
	private string _state;
	
	private string _zip;
	
	private bool _contract;
	
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void Onau_idChanging(string value);
    partial void Onau_idChanged();
    partial void Onau_lnameChanging(string value);
    partial void Onau_lnameChanged();
    partial void Onau_fnameChanging(string value);
    partial void Onau_fnameChanged();
    partial void OnphoneChanging(string value);
    partial void OnphoneChanged();
    partial void OnaddressChanging(string value);
    partial void OnaddressChanged();
    partial void OncityChanging(string value);
    partial void OncityChanged();
    partial void OnstateChanging(string value);
    partial void OnstateChanged();
    partial void OnzipChanging(string value);
    partial void OnzipChanged();
    partial void OncontractChanging(bool value);
    partial void OncontractChanged();
    #endregion
	
	public authors()
	{
		OnCreated();
	}
	
	[Column(Storage="_au_id", DbType="VarChar(11) NOT NULL", CanBeNull=false, IsPrimaryKey=true)]
	public string au_id
	{
		get
		{
			return this._au_id;
		}
		set
		{
			if ((this._au_id != value))
			{
				this.Onau_idChanging(value);
				this.SendPropertyChanging();
				this._au_id = value;
				this.SendPropertyChanged("au_id");
				this.Onau_idChanged();
			}
		}
	}
	
	[Column(Storage="_au_lname", DbType="VarChar(40) NOT NULL", CanBeNull=false)]
	public string au_lname
	{
		get
		{
			return this._au_lname;
		}
		set
		{
			if ((this._au_lname != value))
			{
				this.Onau_lnameChanging(value);
				this.SendPropertyChanging();
				this._au_lname = value;
				this.SendPropertyChanged("au_lname");
				this.Onau_lnameChanged();
			}
		}
	}
	
	[Column(Storage="_au_fname", DbType="VarChar(20) NOT NULL", CanBeNull=false)]
	public string au_fname
	{
		get
		{
			return this._au_fname;
		}
		set
		{
			if ((this._au_fname != value))
			{
				this.Onau_fnameChanging(value);
				this.SendPropertyChanging();
				this._au_fname = value;
				this.SendPropertyChanged("au_fname");
				this.Onau_fnameChanged();
			}
		}
	}
	
	[Column(Storage="_phone", DbType="Char(12) NOT NULL", CanBeNull=false)]
	public string phone
	{
		get
		{
			return this._phone;
		}
		set
		{
			if ((this._phone != value))
			{
				this.OnphoneChanging(value);
				this.SendPropertyChanging();
				this._phone = value;
				this.SendPropertyChanged("phone");
				this.OnphoneChanged();
			}
		}
	}
	
	[Column(Storage="_address", DbType="VarChar(40)")]
	public string address
	{
		get
		{
			return this._address;
		}
		set
		{
			if ((this._address != value))
			{
				this.OnaddressChanging(value);
				this.SendPropertyChanging();
				this._address = value;
				this.SendPropertyChanged("address");
				this.OnaddressChanged();
			}
		}
	}
	
	[Column(Storage="_city", DbType="VarChar(20)")]
	public string city
	{
		get
		{
			return this._city;
		}
		set
		{
			if ((this._city != value))
			{
				this.OncityChanging(value);
				this.SendPropertyChanging();
				this._city = value;
				this.SendPropertyChanged("city");
				this.OncityChanged();
			}
		}
	}
	
	[Column(Storage="_state", DbType="Char(2)")]
	public string state
	{
		get
		{
			return this._state;
		}
		set
		{
			if ((this._state != value))
			{
				this.OnstateChanging(value);
				this.SendPropertyChanging();
				this._state = value;
				this.SendPropertyChanged("state");
				this.OnstateChanged();
			}
		}
	}
	
	[Column(Storage="_zip", DbType="Char(5)")]
	public string zip
	{
		get
		{
			return this._zip;
		}
		set
		{
			if ((this._zip != value))
			{
				this.OnzipChanging(value);
				this.SendPropertyChanging();
				this._zip = value;
				this.SendPropertyChanged("zip");
				this.OnzipChanged();
			}
		}
	}
	
	[Column(Storage="_contract", DbType="Bit NOT NULL")]
	public bool contract
	{
		get
		{
			return this._contract;
		}
		set
		{
			if ((this._contract != value))
			{
				this.OncontractChanging(value);
				this.SendPropertyChanging();
				this._contract = value;
				this.SendPropertyChanged("contract");
				this.OncontractChanged();
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
#pragma warning restore 1591