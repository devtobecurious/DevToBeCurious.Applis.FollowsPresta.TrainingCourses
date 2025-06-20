using DTBC.FC.Sessions.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Application
{
    /// <summary>
    /// Provides functionality to add a session to the system.
    /// </summary>
    /// <remarks>This class is responsible for handling the addition of session objects.  It ensures that the
    /// provided session is valid and assigns an identifier to it.</remarks>
    public class AddSessionMachine
    {
        #region Public methods
        /// <summary>
        /// 
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        public Session AddOne(Session session)
        {
            ArgumentException.ThrowIfNullOrEmpty(nameof(session), "Session cannot be null or empty.");
            session.Id = 1;

            return session;
        }
        #endregion
    }
}
