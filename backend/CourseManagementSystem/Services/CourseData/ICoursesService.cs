using CourseManagementSystem.Models;

namespace CourseManagementSystem.Service.CourseData
{
    public interface ICoursesService
    {
        List<Courses> Get();
        Courses Get(string id);
        Courses Create(Courses courses);
        void Update(string id, Courses courses);
        void Delete(string id);

        Task<List<Courses>> GetByName(string name);
    }
}
