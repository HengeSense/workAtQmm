using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
namespace JobSiteStarterKit.DAL
{
    /// <summary>
    /// ��ְ��վ�����ݷ��ʲ����
    /// </summary>
	public class DBAccess:IDisposable
    {
        //˽�г�Ա������
		private IDbCommand cmd=new SqlCommand();
		private string strConnectionString="";
		private bool handleErrors=false;
		private string strLastError="";
        /// <summary>
        /// ���캯������ʼ�������ַ�����ΪIDbCommand����ָ��ʵ�����Ӻ�Ĭ�ϵ�CommandType���͡�
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
        //����IDbCommand�����ExecuteReader��������һ��DbDataReader����
		public IDataReader ExecuteReader()
		{
			IDataReader reader=null;
            try
            {
                //������
                this.Open();
                //ִ��ExecuteReader������ִ����ɺ�ر�����
                reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }
            //�������ӻ�ִ���г����쳣ʱ�����׳�һ���쳣
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
            //����DbDataReader����
			return reader;
		}
        /// <summary>
        /// ���ط���������ָ����SQL�����ȡһ��DbDataReader����
        /// </summary>
        /// <param name="commandtext">ָ����SQL����</param>
        /// <returns></returns>
		public IDataReader ExecuteReader(string commandtext)
		{
			IDataReader reader=null;
			try
			{
                //ΪDBCommand����ָ����ѯ����
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
            //����DbDataReader����
			return reader;
		}
        /// <summary>
        /// ��ȡ��һ�е�һ�еĽ��
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
            //���ص�һ�е�һ�еĽ��
			return obj;
		}
        /// <summary>
        /// ���ط���������ָ����SQL��䷵�ص�һ�е�һ�е�ִ�н��
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
        /// ִ��SQL�����������Ӱ�������
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
        /// ���ط���������ָ���ĵ�SQL����ִ��SQL��������Ӱ�������
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
        /// ִ��SQL���������һ��DataSet����
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
        /// ���ط�����ִ��ָ����SQL�������DataSet����
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
        /// CommandText�������ڻ�ȡ������SQL����
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
        /// ���������������
        /// </summary>
		public IDataParameterCollection Parameters
		{
			get
			{
				return cmd.Parameters;
			}
		}
        /// <summary>
        /// ��DbCommand������Ӳ�������
        /// </summary>
        /// <param name="paramname">��������</param>
        /// <param name="paramvalue">����ֵ</param>
    	public void AddParameter(string paramname,object paramvalue)
		{
			SqlParameter param=new SqlParameter(paramname,paramvalue);
			cmd.Parameters.Add(param);
		}
        /// <summary>
        /// ���ط�������DbCommand��������ض��Ĳ�������
        /// </summary>
        /// <param name="param"></param>
		public void AddParameter(IDataParameter param)
		{
			cmd.Parameters.Add(param);
		}
        /// <summary>
        /// ��ȡ�����������ַ���������
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
        /// �����ݿ�����
        /// </summary>
        private void Open()
        {
            cmd.Connection.Open();
        }
        /// <summary>
        /// �ر����ݿ�����
        /// </summary>
        private void Close()
        {
            cmd.Connection.Close();
        }
        /// <summary>
        /// ��ȡ�������쳣��Ϣ
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
        /// ��ȡ���������ݷ��ʴ�����Ϣ
        /// </summary>
		public string LastError
		{
			get
			{
				return strLastError;
			}
		}
        /// <summary>
        /// �ͷ�DbCommand����
        /// </summary>
        public void Dispose()
        {
            cmd.Dispose();
        }
	}

}
