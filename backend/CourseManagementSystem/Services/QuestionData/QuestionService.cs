using CourseManagementSystem.Models;
using MongoDB.Driver;

namespace CourseManagementSystem.Services.QuestionData
{
    public class QuestionService : IQuestionService
    {
        private readonly IMongoCollection<Question> _question;

        public QuestionService(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _question = database.GetCollection<Question>(settings.QuestionCollectionName);
        }
        public Question Create(Question question)
        {
            _question.InsertOne(question);
            return question;
        }

        public void Delete(string id)
        {
            _question.DeleteOne(question => question.Id == id);
        }

        public List<Question> Get()
        {
            return _question.Find(question => true).ToList();
        }

        public Question Get(string id)
        {
            return _question.Find(question => question.Id == id).FirstOrDefault();
        }

        public void Update(string id, Question question)
        {
            _question.ReplaceOne(question => question.Id == id, question);
        }
    }
}
