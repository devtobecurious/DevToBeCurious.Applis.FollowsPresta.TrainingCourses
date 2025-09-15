namespace DTBC.FC.Sessions.Models
{
    /// <summary>
    /// Represents the current status of a session, including its state and associated metadata.
    /// </summary>
    /// <remarks>This class is used to encapsulate information about a session's status, which may include
    /// details such as whether the session is active, its duration, or other relevant properties.</remarks>
    public class SessionStatus
    {
        #region Fields
        /// <summary>
        /// Represents a session status indicating that the session is in the draft state.
        /// </summary>
        /// <remarks>This status is typically used to indicate that the session is not yet finalized or
        /// published.</remarks>
        public static SessionStatus Draft = new(1, "Brouillon");
        #endregion

        #region Constructors
        private SessionStatus(int id, string label)
        {
            Id = id;
            Label = label;
        }
        #endregion

        #region Public methods
        public static bool operator ==(SessionStatus status1, SessionStatus status2)
        {
            if (status1 is null && status2 is null)
                return true;
            if (status1 is null || status2 is null)
                return false;
            return status1.Id == status2.Id;
        }

        public static bool operator !=(SessionStatus status1, SessionStatus status2)
        {
            return !(status1 == status2);
        }
        #endregion

        #region Properties
        public int Id { get; init; }
        public string Label { get; init; } = string.Empty;
        #endregion
    }
}