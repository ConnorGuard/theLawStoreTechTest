using System.ComponentModel.DataAnnotations;

namespace JobSearcher.Dtos{
    public class JobSearchReadDto{
        public int Id{get; set;}

        public string JobType { get; set; }
        
        public string Salary { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Date { get; set; }
    }
}