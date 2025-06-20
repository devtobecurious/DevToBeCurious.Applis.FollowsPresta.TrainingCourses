using DTBC.FC.Sessions.Application;
using DTBC.FC.Sessions.Application.Commands;
using DTBC.FC.Sessions.Infrastructure;
using DTBC.FC.Sessions.Infrastructure.Commands;
using DTBC.FC.Sessions.Models;

using Microsoft.EntityFrameworkCore;

namespace DTBC.FC.Sessions.Tests
{
    public class SessionsUnitTests
    {
        #region Public methods
        /// <summary>
        /// Verifies that a complete session can be created and added successfully.
        /// </summary>
        /// <remarks>This test ensures that a session with valid properties is created, added using the 
        /// <see cref="AddSessionMachine"/> class, and assigned a valid identifier. The session's  properties, such as
        /// start time, end time, and status, are initialized to simulate a  complete session setup.</remarks>
        [Fact]
        public async Task ShouldCreateACompleteSession()
        {
            var session = SessionInitializer.PrepareOne();

            //SQLitePCL.Batteries.Init();

            DbContextOptionsBuilder<SessionsDbContext> optionsBuilder = new();
            optionsBuilder.UseInMemoryDatabase("SessionsTestDb");
            var context = new SessionsDbContext(optionsBuilder.Options);

            IAddOneSessionRepository addOneSessionRepo = new DbContextAddOneSessionRepository(context);
            AddSessionMachine addSessionMachine = new(addOneSessionRepo);
            await addSessionMachine.AddOne(session);

            Assert.NotNull(session);
            Assert.Equal(1, session.Id);
        }
        #endregion
    }
}
