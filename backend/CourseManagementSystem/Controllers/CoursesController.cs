using CourseManagementSystem.Service.CourseData;
using Microsoft.AspNetCore.Mvc;
using CourseManagementSystem.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CourseManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesService coursesService;

        public CoursesController(ICoursesService coursesService) {
            this.coursesService = coursesService;
        }

        // GET: api/<CoursesController>
        [HttpGet]
        public List<Courses> Get()
        {
            return coursesService.Get();
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public ActionResult<Courses> Get(string id)
        {
            var courses = coursesService.Get(id);
            if(courses == null)
            {
                return NotFound($"not found");
            }
            return courses;
        }

        [HttpGet]
        [Route("name")]
        public async Task<IActionResult> GetByName(string name)
        {
            var courses = await coursesService.GetByName(name);

            if (courses == null || !courses.Any())
            {
                return NotFound();
            }

            return Ok(courses);
        }

        // POST api/<CoursesController>
        [HttpPost]
        public ActionResult<Courses> Post([FromBody] Courses courses)
        {
            coursesService.Create(courses);
            return CreatedAtAction(nameof(Get), new {id = courses.Id}, courses);
        }

        // PUT api/<CoursesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Courses courses)
        {
            var existingCourses = coursesService.Get(id);

            if(existingCourses == null)
            {
                return NotFound($"Not Found");
            }

            coursesService.Update(id, courses);

            return NoContent();
        }

        // DELETE api/<CoursesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var courses = coursesService.Get(id);
            if(courses == null)
            {
                return NotFound($"Not Found");
            }

            coursesService.Delete(courses.Id);

            return Ok($"Deleted");
        }
    }
}
