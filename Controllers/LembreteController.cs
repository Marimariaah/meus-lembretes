using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MeusLembretes.Controllers
{
    [ApiController]
    [Route(template:"V1")]
    public class LembreteController : ControllerBase
    {
        public ActionResult<List<LembreteController>> Get()
        {
            return Ok();
        }
    }
}