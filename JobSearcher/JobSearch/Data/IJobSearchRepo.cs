using System.Collections.Generic;
using JobSearcher.Models;

//API Interface
namespace JobSearcher.Data
{
    public interface IJobSearchRepo
    {
        bool SaveChanges();
        JobSearch GetJobById(int id);
        IEnumerable<JobSearch> GetAllJobs();
        void CreateNewJob(JobSearch job);
        void UpdateJob(JobSearch job);
        void DeleteJob(JobSearch job);
    }
}