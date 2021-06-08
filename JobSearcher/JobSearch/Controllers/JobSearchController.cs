using Microsoft.AspNetCore.Mvc;
using JobSearcher.Data;
using JobSearcher.Models;
using System.Collections.Generic;
using AutoMapper;
using JobSearcher.Dtos;

namespace JobSearcher.Controllers
{
    ///api/jobs
    [Route("api/jobs")]
    [ApiController]
    public class JobSearchController:ControllerBase
    {
        private readonly IJobSearchRepo _repository;
        private readonly IMapper _mapper;

        public JobSearchController(IJobSearchRepo repository, IMapper mapper)
        {
                _repository = repository;
                _mapper = mapper;
        }

        //GET api/jobs
        [HttpGet]
        public ActionResult <IEnumerable<JobSearchReadDto>> GetAllJobSearch()
        {
            var JobSearchItems = _repository.GetAllJobs();
            if(JobSearchItems != null){
                return Ok(_mapper.Map<IEnumerable<JobSearchReadDto>>(JobSearchItems));
            }
            return NotFound();
        }

        //GET api/jobs/{id}
        [HttpGet("{id}", Name="GetJobById")]
        public ActionResult <JobSearchReadDto> GetJobById(int id)
        {
            var JobSearchItem = _repository.GetJobById(id);
            if(JobSearchItem != null){
                return Ok(_mapper.Map<JobSearchReadDto>(JobSearchItem));
            }
            return NotFound();
        }

        //POST api/jobs
        [HttpPost]
        public ActionResult <JobSearchReadDto> CreateNewJob(JobSearchCreateDto JobSearchCreateDto)
        {
            var JobSearchModel = _mapper.Map<JobSearch>(JobSearchCreateDto);
            _repository.CreateNewJob(JobSearchModel);
            _repository.SaveChanges();

            var JobSearchReadDto = _mapper.Map<JobSearchReadDto>(JobSearchModel);
            return CreatedAtRoute(nameof(GetJobById), new {Id = JobSearchReadDto.Id},JobSearchReadDto);
        }

         //PUT api/jobs
        [HttpPut("{id}")]
        public ActionResult <JobSearchReadDto> UpdateJob(int id, JobSearchCreateDto JobUpdateDto)
        {
            var jobModelFromRepo = _repository.GetJobById(id);
            if(jobModelFromRepo == null){
                return NotFound();
            }

           _mapper.Map(JobUpdateDto, jobModelFromRepo);
           _repository.UpdateJob((JobSearch)jobModelFromRepo);
           _repository.SaveChanges();
           return NoContent();
        }
        
        //DELETE api/jobs
        [HttpDelete("{id}")]
        public ActionResult <JobSearchReadDto> DeleteJob(int id)
        {
            var jobModelFromRepo = _repository.GetJobById(id);
            if(jobModelFromRepo == null){
                return NotFound();
            }
           _repository.DeleteJob((JobSearch)jobModelFromRepo);
           _repository.SaveChanges();
           return NoContent();
        }
    } 
}