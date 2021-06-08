using JobSearcher.Models;
using Microsoft.EntityFrameworkCore;

namespace JobSearcher.Data{
    public class JobSearchContext: DbContext{
        public JobSearchContext(DbContextOptions<JobSearchContext> opt) : base(opt){

        }
        public DbSet<JobSearch> JobSearch { get; set; }
    }
}