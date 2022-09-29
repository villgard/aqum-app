export default {
  form: {
    email: 'Email',
    emailType: 'Email is not a valid',
    emailRequired: 'Email is required',
    password: 'Password',
    passwordCaption: 'Password must contain numbers (0-9), Capital and uppercase Latin letters (A-z)',
    repeatPassword: 'Repeat Password',
    telegram: 'Telegram <span>(Optional)</span>',
    errorText: 'Incorect Email or Password',
    footerText: 'Already have an account?',
    footerButton: 'Log in',
  },
  signUp: {
    title: 'Create Your account',
    caption:
      'By register, you agree to our <a href="{terms}" target="_blank">Terms of Service</a> and <a href="{privacy}" target="_blank">Privacy Policy</a>.',
    form: {
      button: 'Create Account',
      errorText: 'Incorect Email or Password',
      footerText: 'Already have an account?',
      footerButton: 'Log in',
    },
  },
  confirmAccount: {
    title: 'Confirm your accont',
    caption: "We sent a verification link to the email example@gmail.com. Click the link to verify your email. You may need to check your spam folder. Don't see it?",
    resend: 'Resend link',
    button: 'Home',
    footerText: 'After you confirm the registration, use your Email and password to log in with <a href="{link}">AQUM Browser</a> client.',
  },
  login: {
    title: 'Enter Your account',
    signUp: 'Create Account',
    recoverPassword: 'Forgot Password?',
    form: {
      button: 'Log In',
    },
  },
  recoverPassword: {
    title: 'Password Recover',
    caption: 'Enter your email so we can send you a link to recover your password',
    form: {
      button: 'Confirm',
    },
  },
  recoverConfirm: {
    title: 'Confirmation',
    caption: "We sent a verification link to the email example@gmail.com. Click the link to reset your password. You may need to check your spam folder. Don't see it?",
    resend: 'Resend link',
    button: 'Home',
  },
  resetPassword: {
    title: 'Enter new Password',
    form: {
      button: 'Confirm',
    },
  },
};
