using DTBC.FC.Sessions.Models;

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DevToBeCurious.FollowsCourses.WebApi.UI.Migrations
{
    /// <inheritdoc />
    public partial class SessionStatusSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                $@"INSERT INTO sessionstatus (Id, Label) VALUES
                ({SessionStatus.Draft.Id}, '{SessionStatus.Draft.Label}');");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                $@"DELETE FROM session_status WHERE Id IN ({SessionStatus.Draft.Id});");
        }
    }
}
