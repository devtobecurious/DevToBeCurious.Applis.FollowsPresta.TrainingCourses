using DevToBeCurious.FollowsCourses.WebApi.UI;
using DevToBeCurious.FollowsCourses.WebApi.UI.Extensions;

using DTBC.FC.Sessions.Application;
using DTBC.FC.Sessions.Application.Commands;
using DTBC.FC.Sessions.Infrastructure;
using DTBC.FC.Sessions.Infrastructure.Commands;

using Microsoft.EntityFrameworkCore;

using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCustomCors(builder.Configuration);
builder.Services.AddScoped<IAddOneSessionRepository, DbContextAddOneSessionRepository>();
builder.Services.AddScoped<AddSessionMachine>();
builder.Services.AddDbContext<SessionsDbContext>(options =>
{
    var executeAssemblyName = System.Reflection.Assembly.GetAssembly(typeof(Program))!.GetName().Name;
    var connectionString = builder.Configuration.GetConnectionString("SessionConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString), b => b.MigrationsAssembly(executeAssemblyName));
});

builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();


app.MapOpenApi();
app.MapScalarApiReference(options => options
    .WithTitle("Demo API")
    .WithTheme(ScalarTheme.Saturn)
    .WithDarkMode(true));

app.UseHttpsRedirection();
app.UseCustomCors();
app.MapSessionEndpoints();

app.Run();
