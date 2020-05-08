import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule
} from '@angular/material';

const materials=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule
];

@NgModule({
  imports:[
    materials
  ],
  exports:[
    materials
  ]
})
export class MaterialModule { }
