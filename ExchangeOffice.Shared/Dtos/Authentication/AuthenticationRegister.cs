using System.ComponentModel.DataAnnotations;

namespace ExchangeOffice.Shared.Dtos.Authentication
{
    public class RegisterAuthentication
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}