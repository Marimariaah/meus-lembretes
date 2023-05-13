using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MeusLembretes.Models;
using MeusLembretes.Data;
using Microsoft.EntityFrameworkCore;
using MeusLembretes.ViewModels;

namespace MeusLembretes.Controllers
{
    [ApiController]
    [Route("V1")]
    public class LembreteController : ControllerBase
    {
        [HttpGet]
        [Route("/listar")]
        public async Task<IActionResult> GetByIdAsync(
            [FromServices] AppDbContext context,
            [FromRoute] int id)
        {
            var lembretes = await context.Lembretes.AsNoTracking().ToListAsync();

            return lembretes == null
                ? NotFound()
                : Ok(lembretes);
        }

        [HttpGet]
        [Route("/listar/{id}")]
        public async Task<IActionResult> GetById([FromServices] AppDbContext context, [FromRoute] int id)
        {
            var todo = await context.Lembretes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            return todo == null ? NotFound() : Ok(todo);
        }

        [HttpPost("/salvar")]
        public async Task<IActionResult> Post(
            [FromServices] AppDbContext context,
            [FromBody] CriarLembretesViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var lembrete = new LembreteEntity
            {
                Data = model.Data,
                Titulo = model.Titulo,
            };

            try
            {
                await context.Lembretes.AddAsync(lembrete);
                await context.SaveChangesAsync();
                return Created($"v1/listar/{lembrete.Id}", lembrete);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

    }
}