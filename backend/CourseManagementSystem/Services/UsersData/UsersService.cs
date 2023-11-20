using CourseManagementSystem.Models;
using MongoDB.Driver;

namespace CourseManagementSystem.Services.UsersData
{
    public class UsersService : IUsersService
    {
        private readonly IMongoCollection<Users> _users;

        public UsersService(IStudentStoreDatabaseSettings settings, IMongoClient mongoClient) {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<Users>(settings.UsersCollectionName); 
        }

        public Users Create(Users users)
        {
            _users.InsertOne(users);
            return users;
           
        }

        public void Delete(string id)
        {
            _users.DeleteOne(users => users.Id == id);
        }

        public List<Users> Get()
        {
            return _users.Find(users => true).ToList();
           
        }

        public Users GetById(string id)
        {
            return _users.Find(users => users.Id == id).FirstOrDefault();
            throw new NotImplementedException();
        }

        public async Task<Users> Login(string email, string password)
        {
            var users = await _users.Find(users => users.Email == email).FirstOrDefaultAsync();
            if (users != null && BCrypt.Net.BCrypt.Verify(password, users.Password))
            {
                return users;
            }
            return null;
        }

        public  async Task<Users> Register(Users users)
        {
           users.Password = BCrypt.Net.BCrypt.HashPassword(users.Password);
            await _users.InsertOneAsync(users);
            return users;
        }

        public void Update(string id, Users users)
        {
            _users.ReplaceOne(users => users.Id == id, users);
            throw new NotImplementedException();
        }
    }
}
