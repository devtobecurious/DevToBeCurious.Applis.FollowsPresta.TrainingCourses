using DTBC.FC.Sessions.Application;
using DTBC.FC.Sessions.Application.Commands;
using DTBC.FC.Sessions.Application.Exceptions;
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
            await (new SessionController()).AddValidSession();
        }

        /// <summary>
        /// Tests whether an error is generated when the training course ID is empty or null.
        /// </summary>
        /// <remarks>This test verifies that the system correctly handles invalid input for the training
        /// course ID by ensuring an appropriate error is generated. It is intended to validate input validation
        /// logic.</remarks>
        /// <returns></returns>
        [Fact]
        public async Task ShouldGenerateErrorWhenTrainingCourseIdEmptyOrNull()
        {
            await (new SessionController()).AddNotValidSessionWithTrainingCourseEmpty();
        }
        #endregion
    }
}
