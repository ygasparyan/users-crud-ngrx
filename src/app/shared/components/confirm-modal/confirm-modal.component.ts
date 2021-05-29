import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {message: string}) {
    this.message = data.message;
  }

  public onConfirm(): void {
    this.dialogRef.close(true);
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }

}
