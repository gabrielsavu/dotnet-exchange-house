using ExchangeOffice.Shared.Dtos.Authentication;
using FluentValidation;

namespace ExchangeOffice.Shared.Validators
{
    public class LoginAuthenticationValidator : AbstractValidator<AuthenticationLogin>
    {
        public LoginAuthenticationValidator()
        {
            RuleFor(a => a.Email).NotEmpty().EmailAddress().MaximumLength(254).MinimumLength(4);
            RuleFor(a => a.Password).NotEmpty().MaximumLength(256);
        }
    }
}