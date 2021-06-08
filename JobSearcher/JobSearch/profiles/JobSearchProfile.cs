using AutoMapper;
using JobSearcher.Models;
using JobSearcher.Dtos;

namespace JobSearcher.Profiles{
    public class JobSearchProfile : Profile
    {
        public JobSearchProfile()
        {
            //source -> Target
            CreateMap<JobSearch, JobSearchReadDto>();
            CreateMap<JobSearchCreateDto, JobSearch>();
            CreateMap<UpdateJobDto, JobSearch>();
        }
    }
}