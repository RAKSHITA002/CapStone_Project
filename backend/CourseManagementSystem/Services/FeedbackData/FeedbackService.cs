using CourseManagementSystem.Models;
using MongoDB.Driver;

namespace CourseManagementSystem.Services.FeedbackData
{
    public class FeedbackService : IFeedbackService
    {
        private readonly IMongoCollection<Feedback> _feedback;

        public FeedbackService(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _feedback = database.GetCollection<Feedback>(settings.FeedbackCollectionName);
        }
        public Feedback Create(Feedback feedback)
        {
            _feedback.InsertOne(feedback);
            return feedback;
        }



        public List<Feedback> Get()
        {
           return _feedback.Find(feedback => true).ToList();
        }
    }
}
