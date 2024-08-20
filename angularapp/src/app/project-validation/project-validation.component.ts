import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-project-validation',
  templateUrl: './project-validation.component.html',
  styleUrls: ['./project-validation.component.css'],
})
export class ProjectValidationComponent implements OnInit {
  myProject!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createObj();
  }

  createObj() {
    this.myProject = this.fb.group({
      projectName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          this.FirstNameNotAllowed,
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email, // Added email validator
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      status: ['', Validators.required],
    });
  }

  FirstNameNotAllowed(control: FormControl): ValidationErrors | null {
    const nameNotAllowed = ['test'];
    const projectnm = control.value as string;
    if (nameNotAllowed.indexOf(projectnm) !== -1) {
      return { firstNameNotAllowed: true };
    }
    return null;
  }

  OnSubmit() {
    console.log('form submitted ....!', this.myProject.value);
  }

  resetForm() {
    this.myProject.reset();
  }
}
