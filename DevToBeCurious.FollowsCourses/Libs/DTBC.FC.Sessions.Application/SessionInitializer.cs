using DTBC.FC.Sessions.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Application
{
    /// <summary>
    /// Prepare a session for use in the application.
    /// </summary>
    public class SessionInitializer
    {
        #region Public methods
        /// <summary>
        /// Prepares a session with default values for testing or initialization purposes.
        /// </summary>
        /// <returns></returns>
        public static Session PrepareOne()
        {
            var session = Session.Draft;

            session.Status = SessionStatus.Draft;

            return session;
        }
        #endregion
    }
}
