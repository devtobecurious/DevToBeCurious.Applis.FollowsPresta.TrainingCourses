using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Models
{
    /// <summary>
    /// Represents a training session, including its schedule, location, and status.
    /// </summary>
    /// <remarks>A session is associated with a specific training course and course center. It includes
    /// details such as the start and end times, the number of days it spans, and its current status. </remarks>
    public class Session
    {
        #region Properties
        public int Id { get; set; } = 0;
        public int CourseCenterId { get; set; } = 0;
        public DateTime StartTime { get; set; } = DateTime.Now;
        public DateTime EndTime { get; set; } = DateTime.Now;
        public SessionStatus Status { get; set; }
        public Location Location { get; set; }
        public int TrainingCourseId { get; set; } = 0;
        public int NbDays { get; set; } = 3;
        #endregion
    }
}
