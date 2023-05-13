using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MeusLembretes.Models;

namespace MeusLembretes.Controllers
{
    [ApiController]
    [Route("V1")]
    public class LembreteController : ControllerBase
    {
        [HttpGet]
        [Route("/listar")]
        public List<LembreteEntity> Get()
        {
            return new List<LembreteEntity>();
        }
    }
}