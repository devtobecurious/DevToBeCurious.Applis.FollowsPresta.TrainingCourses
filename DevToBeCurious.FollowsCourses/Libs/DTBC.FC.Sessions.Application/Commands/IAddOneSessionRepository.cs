using DTBC.FC.Sessions.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Application.Commands
{
    /// <summary>
    /// Interface for adding a single session to the system.
    /// </summary>
    public interface IAddOneSessionRepository
    {
        /// <summary>
        /// Add on session to the system asynchronously.
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        Task AddOneAsync(Session session);
    }
}
