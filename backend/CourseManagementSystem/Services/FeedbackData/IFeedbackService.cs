using CourseManagementSystem.Models;

namespace CourseManagementSystem.Services.FeedbackData
{
    public interface IFeedbackService
    {
        List<Feedback> Get();
        Feedback Create(Feedback feedback);
    }
}
