using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeusLembretes.Models;
using Microsoft.EntityFrameworkCore;

namespace MeusLembretes.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<LembreteEntity> Lembretes { get; set; }
        protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlite(connectionString: "DataSource=app.db;cache=Shared");
    }
}