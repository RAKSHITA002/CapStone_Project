using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CourseManagementSystem.Models
{
    public class Feedback
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("userId")]
        public string UserId { get; set; } = String.Empty;

        [BsonElement("review")]
        public string Review { get; set; } = String.Empty;

        [BsonElement("content")]

        public string Content { get; set; } = String.Empty;
    }
}
