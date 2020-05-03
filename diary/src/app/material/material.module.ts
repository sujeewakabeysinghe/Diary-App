import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

const materials=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
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
