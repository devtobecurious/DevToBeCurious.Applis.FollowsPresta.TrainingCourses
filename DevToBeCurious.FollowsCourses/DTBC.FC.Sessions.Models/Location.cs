namespace DTBC.FC.Sessions.Models
{
    //public record Location(
    //    int Id,
    //    string Label
    //)
    //{
    //    public static Location Online { get; } = new(1, "En ligne");
    //    public static Location InPerson { get; } = new(2, "En présentiel");
    //    public static Location Hybrid { get; } = new(3, "Hybride");
    //}

    public class Location
    {
        #region Fields
        public static Location Online = new(1, "Distanciel");
        #endregion

        #region Constructors
        private Location(int id, string label)
        {
            Id = id;
            Label = label;
        }
        #endregion

        #region Public methods
        public static bool operator ==(Location location1, Location location2)
        {
            if (location1 is null && location2 is null)
                return true;
            if (location1 is null || location2 is null)
                return false;
            return location1.Id == location2.Id;
        }

        public static bool operator !=(Location status1, Location status2)
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