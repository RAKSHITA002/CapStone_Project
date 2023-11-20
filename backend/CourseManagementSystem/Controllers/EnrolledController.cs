using CourseManagementSystem.Services.EnrolledData;
using Microsoft.AspNetCore.Mvc;
using CourseManagementSystem.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CourseManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrolledController : ControllerBase
    {
        private readonly IEnrolledService enrolledService;

        public EnrolledController(IEnrolledService enrolledService) {
            this.enrolledService = enrolledService;
        }
        // GET: api/<EnrolledController>/userId
        [HttpGet("{userId}")]
        public IActionResult GetByUserId(string userId)
        {
            var enrollments = enrolledService.GetByUserId(userId);
            return Ok(enrollments);
        }

        // GET api/<EnrolledController>/5
      

        // POST api/<EnrolledController>
        [HttpPost]
        public ActionResult<Enrolled> Post([FromBody] Enrolled enrolled)
        {
            enrolledService.Create(enrolled);
            return CreatedAtAction(nameof(GetByUserId), new {id = enrolled.Id}, enrolled);
        }


        [HttpGet]
        [Route("name")]
        public async Task<IActionResult> GetByName(string name)
        {
            var enroll = await enrolledService.GetByName(name);

            if (enroll == null || !enroll.Any())
            {
                return NotFound();
            }

            return Ok(enroll);
        }

        // PUT api/<EnrolledController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Enrolled enrolled)
        {
            var existingEnrolled = enrolledService.GetByUserId(id);

            if (existingEnrolled == null)
            {
                return NotFound($"Student with Id = {id} not found");
            }

            enrolledService.Update(id, enrolled);

            return NoContent();
        }

        // DELETE api/<EnrolledController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var enrolled = enrolledService.Get(id);
            if (enrolled == null)
            {
                return NotFound($"Not Found");
            }

            enrolledService.Delete(enrolled.Id);

            return Ok($"Deleted");
        }
    }
}
