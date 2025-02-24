import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Material.Module';

@Component({
  selector: 'app-registeredusers',
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.css'],
  standalone: true
})
export class RegisteredUsersComponent implements OnInit {
  registeredUsers: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadRegisteredUsers();
  }

  loadRegisteredUsers() {
    this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  }
}
