using CourseManagementSystem.Models;

namespace CourseManagementSystem.Services
{
    public interface IStudentServices
    {
        List<Student> Get();
        Student Get(string id);
        Student Create(Student student);
        void Update(string id,Student student);
        void Delete(string id);
    }
}
