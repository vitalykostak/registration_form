class AuthHelper {
  static isValidEmail(email) {
    const regExr = /^.+@.{1,6}\..{1,6}$/;
    return regExr.test(email);
  }

  static isValidPasswordLength(password) {
    const minLength = 6;
    return password.length >= minLength;
  }

  static isSamePasswords(password1, password2) {
    return password1 === password2;
  }
}

export default AuthHelper;
