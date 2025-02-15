import { Component } from '@angular/core';
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
  registerUser() {


}
}
