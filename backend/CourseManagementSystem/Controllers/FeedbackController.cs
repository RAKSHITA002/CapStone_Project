using CourseManagementSystem.Models;
using CourseManagementSystem.Services.FeedbackData;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CourseManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase

    {
        private readonly IFeedbackService feedbackService;

        public FeedbackController(IFeedbackService feedbackService) {
            this.feedbackService = feedbackService;
        }

        // GET: api/<FeedbackController>
        [HttpGet]
        public ActionResult<List<Feedback>> Get()
        {
            return feedbackService.Get();
        }

        // GET api/<FeedbackController>/5
        /*[HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }*/

        // POST api/<FeedbackController>
        [HttpPost]
        public ActionResult<Feedback> Post([FromBody] Feedback feedback)
        {
            feedbackService.Create(feedback);
            return CreatedAtAction(nameof(Get), new { id = feedback.Id }, feedback);
        }

        // PUT api/<FeedbackController>/5
        /*[HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FeedbackController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
