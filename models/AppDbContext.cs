using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeusLembrete.models;
using Microsoft.EntityFrameworkCore;

namespace MeusLembrete.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Lembrete> Lembretes {get; set;}
        protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder) 
            => optionsBuilder.UseSqlite(connectionString:"DataSource=app.db;cache=Shared");
        
        
    }
}