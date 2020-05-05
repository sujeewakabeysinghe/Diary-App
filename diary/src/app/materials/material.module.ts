import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

const materials=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule
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
