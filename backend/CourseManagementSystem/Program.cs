using CourseManagementSystem.Models;
using CourseManagementSystem.Service.CourseData;
using CourseManagementSystem.Services;
using CourseManagementSystem.Services.CourseData;
using CourseManagementSystem.Services.EnrolledData;
using CourseManagementSystem.Services.FeedbackData;
using CourseManagementSystem.Services.QuestionData;
using CourseManagementSystem.Services.UsersData;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<StudentStoreDatabaseSettings>(builder.Configuration.GetSection(nameof(StudentStoreDatabaseSettings)));

builder.Services.AddSingleton<IStudentStoreDatabaseSettings>(sp => sp.GetRequiredService<IOptions<StudentStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s => new MongoClient(builder.Configuration.GetValue<string>("StudentStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IStudentServices, StudentServices>();
builder.Services.AddScoped<ICoursesService, CoursesServices>();
builder.Services.AddScoped<IUsersService, UsersService>();

builder.Services.AddScoped<IEnrolledService, EnrolledService>();

builder.Services.AddScoped<IFeedbackService, FeedbackService>();
builder.Services.AddScoped<IQuestionService, QuestionService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(options =>
            options.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

app.MapControllers();

app.Run();
