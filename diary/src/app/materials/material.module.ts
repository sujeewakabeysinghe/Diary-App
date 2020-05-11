import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule,
  MatTooltipModule
} from '@angular/material';

const materials=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule,
  MatTooltipModule
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
