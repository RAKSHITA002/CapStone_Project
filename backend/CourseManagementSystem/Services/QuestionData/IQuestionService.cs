using CourseManagementSystem.Models;

namespace CourseManagementSystem.Services.QuestionData
{
    public interface IQuestionService
    {

        List<Question> Get();
        Question Get(string id);
        Question Create(Question question);
        void Update(string id, Question question);
        void Delete(string id);
    }
}
