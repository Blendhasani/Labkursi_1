﻿using Enflix.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace Enflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SerialiController : ControllerBase
    {


        public IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public SerialiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {

            string query = @"select S.SerialiID, S.Titulli , S.NrSezonave , S.PershkrimiS , S.Foto_S ,S.AktortSId, S.ProducentiSID ,S.RegjisoriSID ,S.SkenaristatSId , K.Kategoria FROM Seriali S INNER JOIN Kategorite_Serialit K ON K.KategoriaSID=S.KategoriaSID";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Seriali ser)
        {
            string query = @"insert into Seriali values ('" + ser.Titulli + @"', '" + ser.NrSezonave + @"', '" + ser.Data_PostimitS + @"', '" + ser.PershkrimiS+ @"', '" + ser.Foto_S + @"', '" + ser.AktortSId +  @"', '" + ser.ProducentiSID + @"', '" + ser.RegjisoriSID + @"' , '" + ser.SkenaristatSId  + @"', '" + ser.KategoriaSID + @"')";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Eshte shtuar me sukses.");
        }




        [HttpPut]
        public JsonResult Put(Seriali ser)
        {
            string query = @"Update  Seriali set Titulli = '" + ser.Titulli + @"',NrSezonave = '" + ser.NrSezonave + @"',Data_PostimitS= '" + ser.Data_PostimitS + @"',PershkrimiS =  '" + ser.PershkrimiS + @"',Foto_S = '" + ser.Foto_S + @"',AktortSId = '" + ser.AktortSId + @"',ProducentiSID = '" + ser.ProducentiSID + @"',RegjisoriSID = '" + ser.RegjisoriSID + @"' ,SkenaristatSId = '" + ser.SkenaristatSId + @"',KategoriaSID = '" + ser.KategoriaSID + @"'WHERE SerialiID = "+ser.SerialiID+ @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Eshte ndryshuar me sukses.");
        }

        [HttpDelete("{serid}")]
        public JsonResult Delete(int serid)
        {
            string query = @"delete from Seriali where SerialiID= " + serid + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Eshte fshire me sukses.");
        }

        [Route("SaveFotoSeriali")]
        [HttpPost]
        public JsonResult SaveFotoSeriali()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/PhotosSeriali/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }


        [HttpGet("{seid}")]
        public JsonResult GetSezonat(int seid)
        {
            string query = @"select SZ.NrSezones from Seriali S INNER JOIN SerialiSezona SS ON S.SerialiID = SS.SerialiID INNER JOIN Sezona SZ ON SZ.SezonaID=SS.SezonaID where S.SerialiID = " + seid + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpGet("{sezid}/episodat")]
        public JsonResult GetEpisodat(int sezid)
        {
            string query = @"SELECT E.NrEpisodes , E.Titulli FROM Seriali S INNER JOIN SerialiSezona SS ON S.SerialiID=SS.SerialiID INNER JOIN Sezona SZ ON SS.SezonaID=SZ.SezonaID INNER JOIN SezonaEpisodi SE ON SZ.SezonaID=SE.SezonaID INNER JOIN Episoda E ON SE.EpisodaID=E.EpisodaID WHERE SZ.SezonaID = " + sezid + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }



    }
}