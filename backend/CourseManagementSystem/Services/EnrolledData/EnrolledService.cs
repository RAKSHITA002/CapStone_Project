
using CourseManagementSystem.Models;
using MongoDB.Driver;

namespace CourseManagementSystem.Services.EnrolledData
{
    public class EnrolledService : IEnrolledService
    {
        private readonly IMongoCollection<Enrolled> _enrolled;

        public EnrolledService(IStudentStoreDatabaseSettings settings,IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _enrolled = database.GetCollection<Enrolled>(settings.EnrolledCollectionName);
        }
        public Enrolled Create(Enrolled enrolled)
        {
            _enrolled.InsertOne(enrolled);
            return enrolled;
            
        }



        public async Task<List<Enrolled>> GetByName(string name)
        {
            var enroll = await _enrolled.Find(enrolled => enrolled.InstructorName == name).ToListAsync();
            return enroll;
        }

        public void Update(string id, Enrolled enrolled)
        {
            _enrolled.ReplaceOne(enrolled => enrolled.Id == id, enrolled);
        }

        List<Enrolled> IEnrolledService.GetByUserId(string userId)
        {
            return _enrolled.Find(Enrolled =>  Enrolled.UserId == userId).ToList();
        }

        public void Delete(string id)
        {
            _enrolled.DeleteOne(enrolled => enrolled.Id == id);
        }

        public Enrolled Get(string id)
        {
            return _enrolled.Find(enrolled => enrolled.Id == id).FirstOrDefault();
        }
    }
}
