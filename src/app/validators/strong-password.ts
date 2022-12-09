import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createStrongStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSymbols = /[!@#$%^&*()]+/.test(value);

    const passwordValid =
      (hasUpperCase || hasLowerCase) && hasNumeric && hasSymbols;

    return passwordValid ? { strongPassword: true } : null;
  };
}
