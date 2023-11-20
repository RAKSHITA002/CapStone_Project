using CourseManagementSystem.Models;
namespace CourseManagementSystem.Services.EnrolledData
{
    public interface IEnrolledService
    {
        List<Enrolled> GetByUserId(string userId);
        Enrolled Get(string id);
        Enrolled Create(Enrolled enrolled);

        Task<List<Enrolled>> GetByName(string name);
        void Update(string id, Enrolled enrolled);

        void Delete(string id);

    }
}
