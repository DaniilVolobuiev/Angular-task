import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createMediumStrengthValidator } from 'src/app/validators/medium-password';
import { createStrongStrengthValidator } from 'src/app/validators/strong-password';
import { createEasyStrengthValidator } from '../../validators/easy-password';

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
}
