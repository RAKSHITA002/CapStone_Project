using MongoDB.Bson.Serialization.Attributes;

namespace CourseManagementSystem.Models
{
    public class Content
    {
        [BsonElement("title")]
        public string Title { get; set; } = string.Empty;

        [BsonElement("description")]
        public string Description { get; set; } = string.Empty;

        [BsonElement("instructorName")]
        public string InstructorName { get; set; } = string.Empty;

        [BsonElement("videos")]
        public string  Videos { get; set;} = string.Empty;


    }
}
