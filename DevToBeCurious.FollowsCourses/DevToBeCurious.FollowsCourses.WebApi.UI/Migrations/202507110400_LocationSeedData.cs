using DTBC.FC.Sessions.Models;

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DevToBeCurious.FollowsCourses.WebApi.UI.Migrations
{
    /// <inheritdoc />
    public partial class LocationSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                $@"INSERT INTO location (Id, Label) VALUES
                ({Location.Online.Id}, '{Location.Online.Label}');");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                $@"DELETE FROM location WHERE Id IN ({Location.Online.Id});");
        }
    }
}
