namespace DTBC.FC.WebApi.Core.Models
{
    public class AddSessionDto
    {
        #region Properties
        public int Id { get; set; } = 0;

        public int CourseCenterId { get; set; } = 0;

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int LocationId { get; set; }

        public int TrainingCourseId { get; set; } = 0;
        public int NbDays { get; set; } = 3;
        #endregion
    }
}
