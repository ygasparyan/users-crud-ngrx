import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Opens snackbar with message
   * @param message - success or error message
   */
  public openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2500,
    });
  }
}
