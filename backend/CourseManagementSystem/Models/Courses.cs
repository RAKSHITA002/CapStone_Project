using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CourseManagementSystem.Models
{
    public class Courses
    {
            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string Id { get; set; } = String.Empty;

            [BsonElement("title")]
            public string Title { get; set; } = String.Empty;

            [BsonElement("img")]
            public string Image { get; set; } = String.Empty;

            [BsonElement("instructor_name")]
            public string InstructorName { get; set; } = String.Empty;

           [BsonElement("ratings")]
            public double Rating { get; set; } = 0.0;

           [BsonElement("heading")]
            public string Heading { get; set; } = String.Empty;

        //[BsonElement("content")]
        //public List<Content> Content { get; set; } 


        [BsonElement("video1")]
        public string Video1 { get; set; } = string.Empty;

        [BsonElement("video2")]
        public string Video2 { get; set; } = string.Empty;

        [BsonElement("video3")]
        public string Video3 { get; set; } = string.Empty;
    }
}