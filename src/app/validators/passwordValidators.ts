import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createEasyStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSymbols = /[/^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]+/.test(value);

    const passwordValid =
      hasUpperCase || hasLowerCase || hasNumeric || hasSymbols;

    return passwordValid ? { easyPassword: true } : null;
  };
}

export function createMediumStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSymbols = /[/^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]+/.test(value);

    const passwordValid =
      ((hasUpperCase || hasLowerCase) && hasNumeric) ||
      ((hasUpperCase || hasLowerCase) && hasSymbols) ||
      (hasSymbols && hasNumeric);

    return passwordValid ? { mediumPassword: true } : null;
  };
}

export function createStrongStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSymbols = /[/^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]+/.test(value);

    const passwordValid =
      (hasUpperCase || hasLowerCase) && hasNumeric && hasSymbols;

    return passwordValid ? { strongPassword: true } : null;
  };
}
