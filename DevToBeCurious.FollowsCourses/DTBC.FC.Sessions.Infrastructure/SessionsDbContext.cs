using DTBC.FC.Sessions.Models;

using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTBC.FC.Sessions.Infrastructure
{
    /// <summary>
    /// Represents the database context for managing training sessions.
    /// </summary>
    public class SessionsDbContext : DbContext
    {
        #region Constructors
        protected SessionsDbContext()
        {
        }

        public SessionsDbContext(DbContextOptions<SessionsDbContext> options) : base(options)
        {
        }
        #endregion

        #region Internal methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Session>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.StartDate).IsRequired();
                entity.Property(e => e.EndDate).IsRequired();
                entity.ToTable("session");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Label).IsRequired();
                entity.ToTable("location");
            });

            modelBuilder.Entity<SessionStatus>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.Label).IsRequired();
                entity.ToTable("sessionstatus");
            });
        }
        #endregion

        #region Properties
        public DbSet<Session> Sessions { get; set; }
        #endregion
    }
}
