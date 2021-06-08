using System.Collections.Generic;
using JobSearcher.Models;

namespace JobSearcher.Data
{
    public class MockJobSearchRepo : IJobSearchRepo
    {
        public void CreateNewJob(JobSearch job)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteJob(JobSearch job)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<JobSearch> GetAllJobs()
        {
            var JobSearch = new List<JobSearch>
            {
                new JobSearch { Id = 0, JobType = "Frontend", Salary = "45,000", Title = "Frontend Developer", Description= "Responsible for implementing visual and interactive elements that users engage with",Date="06-06-2021"},
                new JobSearch { Id = 1, JobType = "Backend", Salary = "55,000", Title = "Backend Developer", Description= "Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.",Date="06-06-2021"},
                new JobSearch { Id = 2, JobType = "Fullstack", Salary = "65,000", Title = "Fullstack Developer", Description= "Works with both the front and back ends of a website or application.",Date="06-06-2021"}
            };

            return JobSearch;
        }

        public IEnumerable<JobSearch> GetJobById()
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<JobSearch> GetJobById(int id)
        {
            throw new System.NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public void UpdateJob(JobSearch job)
        {
            throw new System.NotImplementedException();
        }

        JobSearch IJobSearchRepo.GetJobById(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}