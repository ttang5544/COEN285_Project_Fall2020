import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';



const coreModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  FlexLayoutModule,
];

const materialModules = [
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatExpansionModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatIconModule,
];



@NgModule({
  declarations: [],
  imports: [
    ...coreModules,
    ...materialModules,
  ],
  exports: [
    ...coreModules,
    ...materialModules,
  ]
})
export class SharedModule { }
