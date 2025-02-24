import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../../Material.Module';
//reactive form used here
@Component({
  selector: 'app-login',
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm
    this.validators
  }
  initForm(){
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  validators(){
    this.loginForm.get('email')?.setValidators([Validators.required, Validators.email]);
    this.loginForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log(this.loginForm.value);
    }
  }
}
