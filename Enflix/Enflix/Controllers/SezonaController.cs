using Enflix.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace Enflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SezonaController : ControllerBase
    {


        private IConfiguration _configuration;

        public SezonaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select S.SezonaID, S.NrSezones, S.NrEpisodave , S.EpisodaID from Sezona S INNER JOIN Episoda E ON S.SezonaID = E.EpisodaID";

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


        public JsonResult Post(Sezona s)
        {
            string query = "INSERT into Sezona values (' " + s.NrSezones + "','" + s.NrEpisodave + "','" + s.EpisodaID + "','"+ s.EpisodaID + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader reader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    reader = myCommand.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    myCon.Close();
                }

            }

            return new JsonResult("Shtuar me sukses!");
        }


        [HttpPut]

        public JsonResult Put(Sezona s)
        {

            string query = @"update Sezona set NrSezones= '" + s.NrSezones + @"', NrEpisodave= '" + s.NrEpisodave + @"', EpisodaID= '" + s.EpisodaID + @"'where SezonaID= " + s.SezonaID + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");

            SqlDataReader Reader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    Reader = myCommand.ExecuteReader();
                    table.Load(Reader);

                    Reader.Close();
                    myCon.Close();


                }
            }
            return new JsonResult("Ndryshuar me sukses!");



        }



        [HttpDelete("{sID}")]

        public new JsonResult Delete(int sID)
        {

            string query = @"delete from Sezona where SezonaID= " + sID + @"";

            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("EnflixCon");
            SqlDataReader reader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    reader = myCommand.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Fshire me sukses!");

        }

    }
}
