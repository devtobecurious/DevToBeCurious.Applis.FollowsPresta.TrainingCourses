using Scalar.AspNetCore;

namespace DevToBeCurious.FollowsCourses.WebApi.UI.Extensions;

/// <summary>
/// Extensions pour la configuration du pipeline de l'application
/// </summary>
public static class WebApplicationExtensions
{
    /// <summary>
    /// Configure les politiques CORS pour l'application
    /// </summary>
    /// <param name="services">La collection de services</param>
    /// <param name="configuration">La configuration de l'application</param>
    /// <returns>La collection de services pour le chaînage</returns>
    public static IServiceCollection AddCustomCors(this IServiceCollection services, IConfiguration configuration)
    {
        var allowedOrigins = configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];

        services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", policy =>
            {
                policy.WithOrigins(allowedOrigins)
                      .AllowAnyMethod()
                      .AllowAnyHeader()
                      .AllowCredentials();
            });
        });

        return services;
    }

    /// <summary>
    /// Configure le pipeline de l'application avec CORS
    /// </summary>
    /// <param name="app">L'application web</param>
    /// <returns>L'application web pour le chaînage</returns>
    public static WebApplication UseCustomCors(this WebApplication app)
    {
        app.UseCors("AllowFrontend");
        return app;
    }

    /// <summary>
    /// Configure la documentation API (OpenAPI et Scalar)
    /// </summary>
    /// <param name="app">L'application web</param>
    /// <returns>L'application web pour le chaînage</returns>
    public static WebApplication UseApiDocumentation(this WebApplication app)
    {
        app.MapOpenApi();
        app.MapScalarApiReference(options => options
            .WithTitle("Demo API")
            .WithTheme(ScalarTheme.Saturn)
            .WithDarkMode(true));

        return app;
    }
}