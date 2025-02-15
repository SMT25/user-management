import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  exports: [MatCardModule, MatInputModule,FormsModule]
})

export class MaterialModule {
}