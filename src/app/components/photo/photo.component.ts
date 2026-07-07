import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cat } from '../../shared/models/cat.model';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PhotoComponent {
  public cat: Cat;

  constructor(
    private dialogRef: MatDialogRef<PhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cat: Cat }
  ) {
    this.cat = data.cat;
  }

  close(): void {
    this.dialogRef.close();
  }
}
