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
        private static readonly List<Location> _locationsList = new();
        public static Location Online = new(1, "Distanciel");
        #endregion

        #region Constructors
        private Location(int id, string label)
        {
            Id = id;
            Label = label;

            _locationsList.Add(this);
        }
        #endregion

        #region Public methods
        /// <summary>
        /// Retrieves a single <see cref="Location"/> object by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the location to retrieve.</param>
        /// <returns>The <see cref="Location"/> object with the specified identifier.</returns>
        /// <exception cref="ArgumentException">Thrown if no location with the specified <paramref name="id"/> exists.</exception>
        public static Location GetOne(int id)
        {
            return _locationsList.First(location => location.Id == id) ?? throw new ArgumentException($"Location with ID {id} not found.");
        }

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