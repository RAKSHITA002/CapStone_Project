using CourseManagementSystem.Services.QuestionData;
using Microsoft.AspNetCore.Mvc;
using CourseManagementSystem.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CourseManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService questionService;

        public QuestionController(IQuestionService questionService) {
            this.questionService = questionService;
        }
        // GET: api/<QuestionController>
        [HttpGet]
        public ActionResult<List<Question>> Get()
        {
            return questionService.Get();
        }

        // GET api/<QuestionController>/5
        [HttpGet("{id}")]
        public ActionResult<Question> Get(string id) 
        {
           var question = questionService.Get(id);
            if(question == null)
            {
                return NotFound();
            }

            return Ok(question);
        }

        // POST api/<QuestionController>
        [HttpPost]
        public ActionResult<Student> Post([FromBody] Question question)
        {
            questionService.Create(question);
            return CreatedAtAction(nameof(Get), new { id = question.Id }, question);
        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Question question)
        {
            var existingQuestion = questionService.Get(id);

            if (existingQuestion == null)
            {
                return NotFound($"Question with Id = {id} not found");
            }

            questionService.Update(id, question);

            return NoContent();
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var question = questionService.Get(id);
            if (question == null)
            {
                return NotFound($"Question with Id = {id} not found");
            }

            questionService.Delete(question.Id);

            return Ok($"Question with Id = {id} deleted");
        }
    }
}
