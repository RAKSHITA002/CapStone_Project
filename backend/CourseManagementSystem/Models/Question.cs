using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CourseManagementSystem.Models
{
    public class Question
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("questionText")]
        public string QuestionText { get; set; } = String.Empty;

        [BsonElement("options")]
        public List<Option>? Options { get; set; }

        [BsonElement("explanation")]
        public string Explanation { get; set; } = String.Empty;
    }


    public class Option
    {
        [BsonElement("text")]
        public string Text { get; set; } = String.Empty;

        [BsonElement("correct")]
        public bool? Correct { get; set; }
    }
}
