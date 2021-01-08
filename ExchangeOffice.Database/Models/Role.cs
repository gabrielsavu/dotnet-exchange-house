using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExchangeOffice.Database.Models
{
    public class Role
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; } =
            new List<UserRole>();
    }
}