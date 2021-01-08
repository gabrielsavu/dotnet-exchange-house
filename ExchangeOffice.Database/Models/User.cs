using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExchangeOffice.Database.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }

        public string Email { get; set; }

        public byte[] Password { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; } =
            new List<UserRole>();
    }
}