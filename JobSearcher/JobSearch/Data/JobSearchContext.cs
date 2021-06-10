using JobSearcher.Models;
using Microsoft.EntityFrameworkCore;

//sets up database connection
namespace JobSearcher.Data{
    public class JobSearchContext: DbContext{
        public JobSearchContext(DbContextOptions<JobSearchContext> opt) : base(opt){

        }
        public DbSet<JobSearch> JobSearch {get; set;}
    }
}