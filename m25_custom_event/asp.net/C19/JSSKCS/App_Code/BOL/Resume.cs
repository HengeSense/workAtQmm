#region Using directives

using System;
using System.Collections.Generic;
using System.Text;
using JobSiteStarterKit.DAL;
using System.Data;
using System.Data.SqlClient;

#endregion

namespace JobSiteStarterKit.BOL
{
    public class Resume
    {

        #region 私有成员变量区

        private int intResumeID;
        private string strUserName;
        private string strJobTitle;
        private string strCity;
        private int intCountryID;
        private int intStateID;
        private int intRelocationCountryID;
        private int intJobTypeID;
        private int intEduLevelID;
        private int intExpLevelID;
        private string strResumeText;
        private string strCoveringLetterText;
        private DateTime dtPostedDate;

        #endregion

        #region 公共属性区

        public int ResumeID
        {
            get
            {
                return intResumeID;
            }
            set
            {
                intResumeID = value;
            }
        }

        public string UserName
        {
            get
            {
                return strUserName;
            }
            set
            {
                strUserName = value;
            }
        }

        public string JobTitle
        {
            get
            {
                return strJobTitle;
            }
            set
            {
                strJobTitle = value;
            }
        }

        public string City
        {
            get
            {
                return strCity;
            }
            set
            {
                strCity = value;
            }
        }

        public int CountryID
        {
            get
            {
                return intCountryID;
            }
            set
            {
                intCountryID = value;
            }
        }

        public int StateID
        {
            get
            {
                return intStateID;
            }
            set
            {
                intStateID = value;
            }
        }

        public int RelocationCountryID
        {
            get
            {
                return intRelocationCountryID;
            }
            set
            {
                intRelocationCountryID = value;
            }
        }

        public int JobTypeID
        {
            get
            {
                return intJobTypeID;
            }
            set
            {
                intJobTypeID = value;
            }

        }

        public int EducationLevelID
        {
            get
            {
                return intEduLevelID;
            }
            set
            {
                intEduLevelID = value;
            }
        }

        public int ExperienceLevelID
        {
            get
            {
                return intExpLevelID;
            }
            set
            {
                intExpLevelID = value;
            }
        }

        public string ResumeText
        {
            get
            {
                return strResumeText;
            }
            set
            {
                strResumeText = value;
            }
        }

        public string CoveringLetterText
        {
            get
            {
                return strCoveringLetterText;
            }
            set
            {
                strCoveringLetterText = value;
            }
        }

        public DateTime PostedDate
        {
            get
            {
                return dtPostedDate;
            }
            set
            {
                dtPostedDate = value;
            }
        }

        #endregion

        #region 公共静态方法区
        /// <summary>
        /// 根据指定的用户名获取单个简历
        /// </summary>
        /// <param name="username">用户名</param>
        /// <returns></returns>
        public static Resume GetResume(string username)
        {
            //实例化DBAccess对象
            DBAccess db = new DBAccess();
            //添加指定的输入参数
            db.AddParameter("@sUserName", username);
            //执行存储过程JobsDb_Resumes_SelectForUser获取简历信息
            SqlDataReader dr = (SqlDataReader)db.ExecuteReader("JobsDb_Resumes_SelectForUser");
            if (dr.HasRows)
            {
                //实例化一个新的Resume对象
                Resume  r = new Resume();
                //从DbDataReader中获取Resume信息
                while (dr.Read())
                {
                    r.ResumeID = dr.GetInt32(dr.GetOrdinal("ResumeID"));
                    r.City = dr.GetString(dr.GetOrdinal("TargetCity"));
                    r.CountryID = dr.GetInt32(dr.GetOrdinal("TargetCountryID"));
                    r.CoveringLetterText = dr.GetString(dr.GetOrdinal("CoverLetterText"));
                    r.EducationLevelID = dr.GetInt32(dr.GetOrdinal("EducationLevelID"));
                    r.ExperienceLevelID = dr.GetInt32(dr.GetOrdinal("ExperienceLevelID"));
                    r.JobTitle = dr.GetString(dr.GetOrdinal("JobTitle"));
                    r.JobTypeID = dr.GetInt32(dr.GetOrdinal("TargetJobTypeID"));
                    r.RelocationCountryID = dr.GetInt32(dr.GetOrdinal("RelocationCountryID"));
                    r.ResumeText = dr.GetString(dr.GetOrdinal("ResumeText"));
                    r.StateID = dr.GetInt32(dr.GetOrdinal("TargetStateID"));
                    r.UserName = dr.GetString(dr.GetOrdinal("UserName"));
                    r.PostedDate = dr.GetDateTime(dr.GetOrdinal("PostDate"));
                }
                //关闭DbDataReader对象并返回Resume对象。
                dr.Close();
                return r;
            }
            else
            {
                //如果没有记录，则将ResumeID值赋为-1。
                dr.Close();
                Resume r = new Resume();
                r.ResumeID = -1;
                return r;
            }
        }
        /// <summary>
        /// 根据指定的用户简历编号获取简历信息
        /// </summary>
        /// <param name="resumeid">简历编号</param>
        /// <returns></returns>
        public static Resume GetResume(int resumeid)
        {
            DBAccess db = new DBAccess();
            db.AddParameter("@iResumeID", resumeid);
            SqlDataReader dr = (SqlDataReader)db.ExecuteReader("JobsDb_Resumes_SelectOne");
            if (dr.HasRows)
            {
                Resume r = new Resume();
                while (dr.Read())
                {
                    r.ResumeID = dr.GetInt32(dr.GetOrdinal("ResumeID"));
                    r.City = dr.GetString(dr.GetOrdinal("TargetCity"));
                    r.CountryID = dr.GetInt32(dr.GetOrdinal("TargetCountryID"));
                    r.CoveringLetterText = dr.GetString(dr.GetOrdinal("CoverLetterText"));
                    r.EducationLevelID = dr.GetInt32(dr.GetOrdinal("EducationLevelID"));
                    r.ExperienceLevelID = dr.GetInt32(dr.GetOrdinal("ExperienceLevelID"));
                    r.JobTitle = dr.GetString(dr.GetOrdinal("JobTitle"));
                    r.JobTypeID = dr.GetInt32(dr.GetOrdinal("TargetJobTypeID"));
                    r.RelocationCountryID = dr.GetInt32(dr.GetOrdinal("RelocationCountryID"));
                    r.ResumeText = dr.GetString(dr.GetOrdinal("ResumeText"));
                    r.StateID = dr.GetInt32(dr.GetOrdinal("TargetStateID"));
                    r.UserName = dr.GetString(dr.GetOrdinal("UserName"));
                    r.PostedDate = dr.GetDateTime(dr.GetOrdinal("PostDate"));
                }
                dr.Close();
                return r;
            }
            else
            {
                dr.Close();
                return new Resume();
            }

        }

        /// <summary>
        /// 插入一个新的简历
        /// </summary>
        /// <param name="r"></param>
        /// <returns></returns>
        public static int Insert(Resume r)
        {
            DBAccess db = new DBAccess();
            db.AddParameter("@sJobTitle", r.JobTitle);
            db.AddParameter("@sTargetCity", r.City);
            db.AddParameter("@iTargateStateID", r.StateID);
            db.AddParameter("@iTargetCountryID", r.CountryID);
            db.AddParameter("@iRelocationCountryID", r.RelocationCountryID);
            db.AddParameter("@iTargetJobTypeID", r.JobTypeID);
            db.AddParameter("@iEducationLevelID", r.EducationLevelID);
            db.AddParameter("@iExperienceLevelID", r.ExperienceLevelID);
            db.AddParameter("@sResumeText", r.ResumeText);
            db.AddParameter("@sCoverLetterText", r.CoveringLetterText);
            db.AddParameter("@sUserName", r.UserName);
            db.AddParameter("@dtPostDate", r.PostedDate);
            SqlParameter p=new SqlParameter("@iResumeID",SqlDbType.Int);
            p.Direction=ParameterDirection.Output;
            db.AddParameter(p);

            int retval=db.ExecuteNonQuery("JobsDb_Resumes_Insert");
            if (retval <= 0)
            {
                return -1;
            }
            else
            {
                return (int)p.Value;
            }

        }
        /// <summary>
        /// 更新一条简历
        /// </summary>
        /// <param name="r"></param>
        /// <returns></returns>
        public static int Update(Resume r)
        {
            DBAccess db = new DBAccess();
            db.AddParameter("@iResumeID", r.ResumeID);
            db.AddParameter("@sJobTitle", r.JobTitle);
            db.AddParameter("@sTargetCity", r.City);
            db.AddParameter("@iTargateStateID", r.StateID);
            db.AddParameter("@iTargetCountryID", r.CountryID);
            db.AddParameter("@iRelocationCountryID", r.RelocationCountryID);
            db.AddParameter("@iTargetJobTypeID", r.JobTypeID);
            db.AddParameter("@iEducationLevelID", r.EducationLevelID);
            db.AddParameter("@iExperienceLevelID", r.ExperienceLevelID);
            db.AddParameter("@sResumeText", r.ResumeText);
            db.AddParameter("@sCoverLetterText", r.CoveringLetterText);
            db.AddParameter("@sUserName", r.UserName);
            db.AddParameter("@dtPostDate", r.PostedDate);

            return db.ExecuteNonQuery("JobsDb_Resumes_Update");

        }
        /// <summary>
        /// 根据指定的简历编号删除简历
        /// </summary>
        /// <param name="ResumeID"></param>
        /// <returns></returns>
        public static int Delete(int ResumeID)
        {
            DBAccess db = new DBAccess();
            db.AddParameter("@iResumeID", ResumeID);
            return db.ExecuteNonQuery("JobsDb_Resumes_Delete");
        }
        /// <summary>
        /// 根据指定的用户名获取简历的编号
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public static int GetResumeID(string username)
        {
            DBAccess db = new DBAccess();
            db.AddParameter("@sUserName", username);
            SqlDataReader dr = (SqlDataReader)db.ExecuteReader("JobsDb_Resumes_SelectForUser");
            int resumeid=-1;
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                     resumeid = dr.GetInt32(dr.GetOrdinal("ResumeID"));
                }
                dr.Close();
             }
            return resumeid;
         }

        /// <summary>
        /// 根据技术技能，国家ID，省份ID和城市搜索简历列表
        /// </summary>
        /// <param name="skills"></param>
        /// <param name="countryid"></param>
        /// <param name="stateid"></param>
        /// <param name="city"></param>
        /// <returns></returns>
        public static DataSet SearchResumes(string skills,int countryid,int stateid,string city)
        {
            string[] arr=skills.Split(' ');
            DataSet ds=new DataSet();
            DataSet dsTemp=new DataSet();
            bool flag=false;

            DBAccess db=new DBAccess();

            foreach(string s in arr)
            {
                db.AddParameter("@sSkill",s);
                if (countryid == -1)
                {
                    db.AddParameter("@iCountryID",DBNull.Value);
                }
                else
                {
                    db.AddParameter("@iCountryID", countryid);
                }
                if (stateid == -1)
                {
                    db.AddParameter("@iStateID", DBNull.Value);
                }
                else
                {
                    db.AddParameter("@iStateID", stateid);
                }
                if (city == "")
                {
                    db.AddParameter("@sCity", DBNull.Value);
                }
                else
                {
                    db.AddParameter("@sCity", city);
                }
                dsTemp = db.ExecuteDataSet("JobsDb_Resumes_SelectForMatchingSkills");
                db.Parameters.Clear();
                ds.Merge(dsTemp);
                if(flag==false)
                {
                    DataColumn[] pk=new DataColumn[1];
                    pk[0]=ds.Tables[0].Columns["resumeid"];
                    ds.Tables[0].PrimaryKey=pk;
                    flag=true;
                }
            }
            return ds;

        }
        /// <summary>
        /// 获取简历的总数量
        /// </summary>
        /// <returns></returns>
        public static int GetResumeCount()
        {
            DBAccess db = new DBAccess();
            return (int)db.ExecuteScalar("JobsDb_Resumes_GetCount");
        }


        #endregion

    }
}
