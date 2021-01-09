using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ExchangeOffice.Shared.Dtos.Authentication
{
    public class LoginAuthentication
    {
        public string Email { get; set; }

        public string Password { get; set; }
    }
}