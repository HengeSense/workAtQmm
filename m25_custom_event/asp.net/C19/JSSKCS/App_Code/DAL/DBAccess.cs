using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
namespace JobSiteStarterKit.DAL
{
    /// <summary>
    /// 求职网站的数据访问层代码
    /// </summary>
	public class DBAccess:IDisposable
    {
        //私有成员变量区
		private IDbCommand cmd=new SqlCommand();
		private string strConnectionString="";
		private bool handleErrors=false;
		private string strLastError="";
        /// <summary>
        /// 构造函数，初始化连接字符串，为IDbCommand对象指事实上连接和默认的CommandType类型。
        /// </summary>
		public DBAccess()
		{
            ConnectionStringSettings objConnectionStringSettings = ConfigurationManager.ConnectionStrings["connectionstring"];
            strConnectionString = objConnectionStringSettings.ConnectionString;
            SqlConnection cnn=new SqlConnection();
			cnn.ConnectionString=strConnectionString;
			cmd.Connection=cnn;
            cmd.CommandType = CommandType.StoredProcedure;
        }
        //调用IDbCommand对象的ExecuteReader方法返回一个DbDataReader对象
		public IDataReader ExecuteReader()
		{
			IDataReader reader=null;
            try
            {
                //打开连接
                this.Open();
                //执行ExecuteReader方法，执行完成后关闭连接
                reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }
            //当打开连接或执行中出现异常时，将抛出一个异常
            catch (Exception ex)
            {
                if (handleErrors)
                    strLastError = ex.Message;
                else
                    throw;
            }
            catch
            {
                throw;
            }
            //返回DbDataReader对象
			return reader;
		}
        /// <summary>
        /// 重载方法，根据指定的SQL命令获取一个DbDataReader对象
        /// </summary>
        /// <param name="commandtext">指定的SQL命令</param>
        /// <returns></returns>
		public IDataReader ExecuteReader(string commandtext)
		{
			IDataReader reader=null;
			try
			{
                //为DBCommand对象指定查询命令
				cmd.CommandText=commandtext;
				reader=this.ExecuteReader();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
            //返回DbDataReader对象
			return reader;
		}
        /// <summary>
        /// 获取第一行第一列的结果
        /// </summary>
        /// <returns></returns>
		public object ExecuteScalar()
		{
			object obj=null;
			try
			{
				this.Open();
				obj= cmd.ExecuteScalar();
                this.Close();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
            //返回第一行第一列的结果
			return obj;
		}
        /// <summary>
        /// 重载方法，根据指定的SQL语句返回第一行第一列的执行结果
        /// </summary>
        /// <param name="commandtext"></param>
        /// <returns></returns>
		public object ExecuteScalar(string commandtext)
		{
			object obj=null;
			try
			{
				cmd.CommandText=commandtext;
				obj= this.ExecuteScalar();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
			return obj;
		}
        /// <summary>
        /// 执行SQL命令，并返回受影响的行数
        /// </summary>
        /// <returns></returns>
		public int ExecuteNonQuery()
		{
			int i=-1;
			try
			{
			    this.Open();
				i=cmd.ExecuteNonQuery();
                this.Close();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
			return i;
		}
        /// <summary>
        /// 重载方法，根据指定的的SQL命令执行SQL，返回受影响的行数
        /// </summary>
        /// <param name="commandtext"></param>
        /// <returns></returns>
		public int ExecuteNonQuery(string commandtext)
		{
			int i=-1;
			try
			{
				cmd.CommandText=commandtext;
				i=this.ExecuteNonQuery();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
			return i;
		}
        /// <summary>
        /// 执行SQL命令，并返回一个DataSet对象
        /// </summary>
        /// <returns></returns>
		public DataSet ExecuteDataSet()
		{
			SqlDataAdapter da=null;
			DataSet ds=null;
			try
			{
				da=new SqlDataAdapter();
				da.SelectCommand=(SqlCommand)cmd;
				ds=new DataSet();
				da.Fill(ds);
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
			return ds;
		}
        /// <summary>
        /// 重载方法，执行指定的SQL命令，返回DataSet对象
        /// </summary>
        /// <param name="commandtext"></param>
        /// <returns></returns>
		public DataSet ExecuteDataSet(string commandtext)
		{
			DataSet ds=null;
			try
			{
				cmd.CommandText=commandtext;
				ds=this.ExecuteDataSet();
			}
			catch(Exception ex)
			{
				if(handleErrors)
					strLastError=ex.Message;
				else
					throw;
			}
            catch
            {
                throw;
            }
			return ds;
		}
        /// <summary>
        /// CommandText属性用于获取和设置SQL命令
        /// </summary>
		public string CommandText
		{
			get
			{
				return cmd.CommandText;
			}
			set
			{
				cmd.CommandText=value;
				cmd.Parameters.Clear();
			}
		}
        /// <summary>
        /// 定义参数集合属性
        /// </summary>
		public IDataParameterCollection Parameters
		{
			get
			{
				return cmd.Parameters;
			}
		}
        /// <summary>
        /// 向DbCommand对象添加参数集合
        /// </summary>
        /// <param name="paramname">参数名称</param>
        /// <param name="paramvalue">参数值</param>
    	public void AddParameter(string paramname,object paramvalue)
		{
			SqlParameter param=new SqlParameter(paramname,paramvalue);
			cmd.Parameters.Add(param);
		}
        /// <summary>
        /// 重载方法，向DbCommand对象添加特定的参数对象
        /// </summary>
        /// <param name="param"></param>
		public void AddParameter(IDataParameter param)
		{
			cmd.Parameters.Add(param);
		}
        /// <summary>
        /// 获取和设置连接字符串的属性
        /// </summary>
		public string ConnectionString
		{
			get
			{
				return strConnectionString;
			}
			set
			{
				strConnectionString=value;
			}
		}
        /// <summary>
        /// 打开数据库连接
        /// </summary>
        private void Open()
        {
            cmd.Connection.Open();
        }
        /// <summary>
        /// 关闭数据库连接
        /// </summary>
        private void Close()
        {
            cmd.Connection.Close();
        }
        /// <summary>
        /// 获取和设置异常信息
        /// </summary>
		public bool HandleExceptions
		{
			get
			{
				return handleErrors;
			}
			set
			{
				handleErrors=value;
			}
		}
        /// <summary>
        /// 获取和设置数据访问错误信息
        /// </summary>
		public string LastError
		{
			get
			{
				return strLastError;
			}
		}
        /// <summary>
        /// 释放DbCommand对象
        /// </summary>
        public void Dispose()
        {
            cmd.Dispose();
        }
	}

}
