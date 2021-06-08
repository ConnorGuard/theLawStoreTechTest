using System.ComponentModel.DataAnnotations;

namespace JobSearcher.Dtos{
    public class JobSearchCreateDto{
        [Required]
        public string JobType { get; set; }
         [Required]
        public string Salary { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Date { get; set; }
    }
}