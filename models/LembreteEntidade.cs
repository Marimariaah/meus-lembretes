using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeusLembretes.Models
{
    public class LembreteEntidade
    {
        public int Id {get; set;}
        public string Titulo {get; set;} = String.Empty;
        public DateTime Data {get; set;}
    }
} 