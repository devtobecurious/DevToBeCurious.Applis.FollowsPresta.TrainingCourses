using DTBC.FC.Sessions.Application.Commands;
using DTBC.FC.Sessions.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Infrastructure.Commands
{
    /// <summary>
    /// Repository for adding a single session to the database context.
    /// </summary>
    public class DbContextAddOneSessionRepository : IAddOneSessionRepository
    {
        #region Public methods
        public Task AddOneAsync(Session session)
        {
            session.Id = 1;

            return Task.CompletedTask;
        }
        #endregion
    }
}
