import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  myform!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myform = this.fb.group(
      {
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        Cemail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, this.passwordValidator]],
        Cpassword: ['', Validators.required],
        age: ['', Validators.required],
        phone: ['', Validators.required],
      },
      { validators: [this.emailMatchValidator, this.passwordMatchValidator] }
    );
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.value;
    if (!password) {
      return null;
    }
    const valid = password.length >= 8 && /\d/.test(password);
    return valid ? null : { invalidPassword: true };
  }

  emailMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const emailControl = group.get('email');
    const CemailControl = group.get('Cemail');

    if (!emailControl || !CemailControl) {
      return null;
    }

    const email = emailControl.value;
    const Cemail = CemailControl.value;

    return email === Cemail ? null : { emailMismatch: true };
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const passwordControl = group.get('password');
    const CpasswordControl = group.get('Cpassword');

    if (!passwordControl || !CpasswordControl) {
      return null;
    }

    const password = passwordControl.value;
    const Cpassword = CpasswordControl.value;

    return password === Cpassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted', this.myform.value);
    }
  }
}
