namespace CourseManagementSystem.Models
{
    public interface IStudentStoreDatabaseSettings
    {
       string StudentCollectionName { get; set; }
       string CoursesCollectionName { get; set; }
        string UsersCollectionName { get; set; }
        string EnrolledCollectionName { get; set; }
        string FeedbackCollectionName { get; set; }

        string QuestionCollectionName { get; set; }
        string ConnectionString { get; set; }

       string DatabaseName { get; set; }
    }
}
