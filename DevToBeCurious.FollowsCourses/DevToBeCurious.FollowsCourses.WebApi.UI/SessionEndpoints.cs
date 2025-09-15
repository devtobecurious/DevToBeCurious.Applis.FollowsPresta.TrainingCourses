using DTBC.FC.Sessions.Application;
using DTBC.FC.Sessions.Models;
using DTBC.FC.WebApi.Core.Models;

using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
namespace DevToBeCurious.FollowsCourses.WebApi.UI;

public static class SessionEndpoints
{
    /// <summary>
    /// Configures the session-related API endpoints for the application.
    /// </summary>
    /// <remarks>This method maps a set of endpoints under the route group <c>/api/Session</c>, providing
    /// functionality for managing session resources. The following endpoints are defined: <list type="bullet"> <item>
    /// <description><c>GET /api/Session</c>: Retrieves all sessions.</description> </item> <item> <description><c>GET
    /// /api/Session/{id}</c>: Retrieves a session by its unique identifier.</description> </item> <item>
    /// <description><c>PUT /api/Session/{id}</c>: Updates an existing session by its unique identifier.</description>
    /// </item> <item> <description><c>POST /api/Session</c>: Creates a new session.</description> </item> <item>
    /// <description><c>DELETE /api/Session/{id}</c>: Deletes a session by its unique identifier.</description> </item>
    /// </list> Each endpoint is tagged with <c>Session</c> and includes OpenAPI metadata for documentation
    /// purposes.</remarks>
    /// <param name="routes">The <see cref="IEndpointRouteBuilder"/> used to define the routes.</param>
    public static void MapSessionEndpoints(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/sessions").WithTags(nameof(Session));

        group.MapGet("/", () =>
        {
            return new[] { new Session() };
        })
        .WithName("GetAllSessions")
        .WithOpenApi();

        group.MapGet("/{id}", (int id) =>
        {
            //return new Session { ID = id };
        })
        .WithName("GetSessionById")
        .WithOpenApi();

        group.MapPut("/{id}", (int id, Session input) =>
        {
            return TypedResults.NoContent();
        })
        .WithName("UpdateSession")
        .WithOpenApi();

        group.MapPost("/", async (AddSessionDto model, AddSessionMachine machine) =>
        {
            var session = await machine.AddOne(new Session()
            {
                CourseCenterId = model.CourseCenterId,
                StartDate = model.StartDate,
                EndDate = model.EndDate,
                Location = Location.GetOne(model.LocationId),
                TrainingCourseId = model.TrainingCourseId,
                NbDays = model.NbDays
            });

            return TypedResults.Created($"/api/sessions/{session.Id}", session);
        })
        .WithName("CreateSession")
        .WithOpenApi();

        group.MapDelete("/{id}", (int id) =>
        {
            //return TypedResults.Ok(new Session { ID = id });
        })
        .WithName("DeleteSession")
        .WithOpenApi();
    }
}
