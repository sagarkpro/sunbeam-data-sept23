using Microsoft.EntityFrameworkCore;

namespace _001DemoCoreMVC.Models
{
    public class PGDACDbContext : DbContext
    {
        public PGDACDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        public DbSet<Emp> Emps { get; set; }
    }
}
