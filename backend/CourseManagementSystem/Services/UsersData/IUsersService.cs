using CourseManagementSystem.Models;

namespace CourseManagementSystem.Services.UsersData
{
    public interface IUsersService
    {
        List<Users> Get();

        Users GetById(string id);

        Users Create(Users users);
        void Update(string id,Users users);
        void Delete(string id);

        Task<Users> Register(Users users);
        Task<Users> Login(string email, string password);

    }
}
