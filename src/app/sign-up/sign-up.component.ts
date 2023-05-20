import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isPasswordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/\d/), // check at least one number
        ],
      ],
      isChecked: [false, Validators.requiredTrue]
    });
  }

  submitForm() {
    if (this.signUpForm.valid) {
      console.log('form value', this.signUpForm.value);
    } else {
      console.log('error, please fill all the field before submitting form');
    }
  }

  checkPassword(condition: string) {
    return !this.password?.errors?.[condition] && this.password?.value != '';
  }

  get password() {
    return this.signUpForm.get('password');
  }
}
