using CourseManagementSystem.Models;
using CourseManagementSystem.Service.CourseData;
using MongoDB.Driver;
using System.Diagnostics;

namespace CourseManagementSystem.Services.CourseData
{
    public class CoursesServices : ICoursesService

    {
        private readonly IMongoCollection<Courses> _courses;

        public CoursesServices(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _courses = database.GetCollection<Courses>(settings.CoursesCollectionName);
        }
        public Courses Create(Courses courses)
        {
            _courses.InsertOne(courses);
            return courses;
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            _courses.DeleteOne(courses => courses.Id == id);
        }

        public List<Courses> Get()
        {
            return _courses.Find(courses => true).ToList();
        }

        public Courses Get(string id)
        {
           return _courses.Find(courses => courses.Id == id).FirstOrDefault();
        }

        public async Task<List<Courses>> GetByName(string name)
        {
            var courses = await _courses.Find(users => users.InstructorName == name).ToListAsync();
            return courses;
        }


        public void Update(string id, Courses courses)
        { 
            _courses.ReplaceOne(courses => courses.Id == id, courses);
        }
            
    }
}
