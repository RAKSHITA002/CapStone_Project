using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CourseManagementSystem.Models
{
    public class Enrolled
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("userId")]
        public string UserId { get; set; } = String.Empty;
        [BsonElement("img")] 
        public string Image { get; set; } = String.Empty;

        [BsonElement("title")]

        public string Title { get; set; } = String.Empty;

        [BsonElement("status")]

        public string Status { get; set; } = String.Empty;

        [BsonElement("instructor_name")]

        public string InstructorName {  get; set; } = String.Empty;
    }
}
