import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ConfirmModalComponent,
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
