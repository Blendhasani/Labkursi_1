using Enflix.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace Enflix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmatController : ControllerBase
    {
        private IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public FilmatController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select F.FilmatId, F.Titulli, F.Foto, F.Data_Postimit, F.KategoriaID, K.KategoriaFId, K.Kategoria from Filmat F INNER JOIN Kategorit_Filmit K ON K.KategoriaFID = F.KategoriaID";

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
        public JsonResult Post(Filmat fil)
        {
            string query = @"insert into Filmat values ('" + fil.Titulli + @"', '" + fil.Foto + @"', '" + fil.Data_Postimit + @"', '" + fil.Pershkrimi_Filmit + @"', '" + fil.Linku_Filmit + @"', '" + fil.AktoriID + @"', '" + fil.KategoriaID + @"', '" + fil.ProducentiID + @"' , '" + fil.RegjisoriID + @"', '" + fil.SkenaristiID + @"')";

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

        [Route("SaveFotoFilmi")]
        [HttpPost]
        public JsonResult SaveFotoFilmi()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/PhotosFilmi/" + filename;

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
    }
}
