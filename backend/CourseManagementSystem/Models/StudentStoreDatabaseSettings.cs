namespace CourseManagementSystem.Models
{
    public class StudentStoreDatabaseSettings : IStudentStoreDatabaseSettings
    {

        public string StudentCollectionName { get; set; } = String.Empty;
        public string CoursesCollectionName { get; set; } = String.Empty;
        public string UsersCollectionName { get; set; } = String.Empty;
        public string EnrolledCollectionName { get; set; } = String.Empty;

        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        public string FeedbackCollectionName { get; set; } = String.Empty;
        public string QuestionCollectionName { get; set; } = String.Empty;
    }
}
