using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MeusLembretes.ViewModels
{
    public class CriarLembretesViewModel
    {
        [Required]
        public string Titulo { get; set; }

        [Required]
        public DateTime Data { get; set; }
    }
}