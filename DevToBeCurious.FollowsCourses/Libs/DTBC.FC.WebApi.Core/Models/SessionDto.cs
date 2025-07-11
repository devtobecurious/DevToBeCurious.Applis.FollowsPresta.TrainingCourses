namespace DTBC.FC.WebApi.Core.Models
{
    /// <summary>
    /// Represents the data transfer object for adding a new session.
    /// </summary>
    /// <remarks>This DTO is used to encapsulate the necessary information for creating a new session,
    /// including details such as the course center, location, and training course identifiers, as well as the session's
    /// start and end dates.</remarks>
    public class AddSessionDto
    {
        #region Properties
        public int CourseCenterId { get; set; } = 0;

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int LocationId { get; set; }

        public int TrainingCourseId { get; set; } = 0;
        public int NbDays { get; set; } = 3;
        #endregion
    }
}
