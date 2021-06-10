using System;
using System.Collections.Generic;
using System.Linq;
using JobSearcher.Models;

//Implemetation of the Job Search interface
namespace JobSearcher.Data{
    public class SqlJobSearchRepo : IJobSearchRepo
    {
        private readonly JobSearchContext _context;
        public SqlJobSearchRepo(JobSearchContext context){
            _context = context;
        }

        public void CreateNewJob(JobSearch job)
        {
            if(job == null){
                throw new ArgumentNullException(nameof(job));
            }
            _context.JobSearch.Add(job);
        }

        public void DeleteJob(JobSearch job)
        {
            if(job == null){
                throw new ArgumentNullException(nameof(job));
            }
            _context.JobSearch.Remove(job);
        }

        public IEnumerable<JobSearch> GetAllJobs(){
            return _context.JobSearch.ToList();
        }

        public JobSearch GetJobById(int id)
        {
            return _context.JobSearch.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges()>=0);
        }

        public void UpdateJob(JobSearch job)
        {
            //Nothing
        }
    }
}
