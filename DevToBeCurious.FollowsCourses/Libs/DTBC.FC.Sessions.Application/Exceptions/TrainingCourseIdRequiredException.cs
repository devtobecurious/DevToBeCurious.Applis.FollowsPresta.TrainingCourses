using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Application.Exceptions
{
    public class TrainingCourseIdRequiredException : Exception
    {
        #region Public methods
        public TrainingCourseIdRequiredException()
        {
        }

        public TrainingCourseIdRequiredException(string? message) : base(message)
        {
        }

        public TrainingCourseIdRequiredException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected TrainingCourseIdRequiredException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
        #endregion
    }
}
