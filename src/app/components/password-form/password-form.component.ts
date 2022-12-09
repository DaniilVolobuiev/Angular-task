import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  createEasyStrengthValidator,
  createMediumStrengthValidator,
  createStrongStrengthValidator,
} from 'src/app/validators/passwordValidators';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  form = new FormGroup({
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      createEasyStrengthValidator(),
      createMediumStrengthValidator(),
      createStrongStrengthValidator(),
    ]),
  });

  get password() {
    return this.form.controls.password as FormControl;
  }

  getClassEasy() {
    return {
      'bg-slate-400': this.password.errors?.required,
      'bg-red-400':
        this.password.errors?.minlength ||
        (!this.password.errors?.minlength &&
          !this.password.errors?.required &&
          this.password.errors?.easyPassword &&
          !this.password.errors?.strongPassword),

      'bg-yellow-400':
        this.password.errors?.easyPassword &&
        this.password.errors?.mediumPassword &&
        !this.password.errors?.strongPassword &&
        !this.password.errors?.minlength &&
        !this.password.errors?.required,

      'bg-green-400':
        this.password.errors?.easyPassword &&
        this.password.errors?.mediumPassword &&
        this.password.errors?.strongPassword &&
        !this.password.errors?.minlength &&
        !this.password.errors?.required,
    };
  }
  getClassMedium() {
    return {
      'bg-slate-400':
        this.password.errors?.required || this.password.errors?.easyPassword,
      'bg-red-400': this.password.errors?.minlength,

      'bg-yellow-400':
        this.password.errors?.easyPassword &&
        this.password.errors?.mediumPassword &&
        !this.password.errors?.strongPassword &&
        !this.password.errors?.minlength &&
        !this.password.errors?.required,
      'bg-green-400':
        this.password.errors?.easyPassword &&
        this.password.errors?.mediumPassword &&
        this.password.errors?.strongPassword &&
        !this.password.errors?.minlength &&
        !this.password.errors?.required,
    };
  }
  getClassStrong() {
    return {
      'bg-slate-400':
        this.password.errors?.required ||
        this.password.errors?.easyPassword ||
        this.password.errors?.mediumPassword,
      'bg-red-400': this.password.errors?.minlength,
      'bg-green-400':
        this.password.errors?.easyPassword &&
        this.password.errors?.mediumPassword &&
        this.password.errors?.strongPassword &&
        !this.password.errors?.minlength &&
        !this.password.errors?.required,
    };
  }
}
