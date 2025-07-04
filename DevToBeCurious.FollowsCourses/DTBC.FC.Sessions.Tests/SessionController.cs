using DTBC.FC.Sessions.Application;
using DTBC.FC.Sessions.Application.Commands;
using DTBC.FC.Sessions.Application.Exceptions;
using DTBC.FC.Sessions.Infrastructure;
using DTBC.FC.Sessions.Infrastructure.Commands;
using DTBC.FC.Sessions.Models;

using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Tests
{
    public class SessionController
    {
        #region Public methods
        /// <summary>
        /// Adds a valid session to the system.
        /// </summary>
        /// <remarks>This method initializes a session with predefined values, adds it to the system,  and
        /// verifies its validity. The session is expected to have an ID of 1 after being added.</remarks>
        /// <returns>A task that represents the asynchronous operation.</returns>
        public async Task AddValidSession()
        {
            var session = SessionInitializer.PrepareOne(1);

            await AddOneSession(session);

            Assert.NotNull(session);
            Assert.Equal(1, session.Id);
        }

        /// <summary>
        /// Tests the behavior of adding a session when the training course ID is missing.
        /// </summary>
        /// <remarks>This method verifies that the <see cref="TrainingCourseIdRequiredException"/> is
        /// thrown when attempting to add a session with an empty or invalid training course ID.</remarks>
        /// <returns></returns>
        public async Task AddNotValidSessionWithTrainingCourseEmpty()
        {
            var session = SessionInitializer.PrepareOne(0);

            await Assert.ThrowsAsync<TrainingCourseIdRequiredException>(async () =>
            {
                await AddOneSession(session);
            });
        }
        #endregion

        #region Internal methods
        private async Task AddOneSession(Session session)
        {
            var context = InitializeDatabase();
            var machine = CreateAddSessionMachine(context);
            await machine.AddOne(session);
        }


        private SessionsDbContext InitializeDatabase()
        {
            DbContextOptionsBuilder<SessionsDbContext> optionsBuilder = new();
            optionsBuilder.UseInMemoryDatabase("SessionsTestDb");
            return new SessionsDbContext(optionsBuilder.Options);
        }

        private static AddSessionMachine CreateAddSessionMachine(SessionsDbContext context)
        {
            IAddOneSessionRepository addOneSessionRepo = new DbContextAddOneSessionRepository(context);
            return new AddSessionMachine(addOneSessionRepo);
        }
        #endregion
    }
}
