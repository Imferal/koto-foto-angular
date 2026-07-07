import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Cat } from '../../shared/models/cat.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
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
