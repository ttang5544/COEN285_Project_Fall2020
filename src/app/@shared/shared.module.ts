import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './material.module';



const ngModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgMaterialModule,
];



@NgModule({
  imports: [
    ...ngModules,
  ],
  exports: [
    ...ngModules,
  ]
})
export class SharedModule { }
