import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaterialModule } from '../../Material.Module';

@Component({
  selector: 'app-register',
  imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  mobileNumber: string = '';

  registerUser(registerUserForm: NgForm) {
    console.log(registerUserForm, "formValue");
    console.log(registerUserForm.value);

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Add the new user to the list
    existingUsers.push({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      mobileNumber: this.mobileNumber
    });

    // Save the updated list back to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    // Clear the form fields
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.password = '';
    this.mobileNumber = '';

    alert('User Registered Successfully');
  }
}
