import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Cat } from '../../shared/models/cat.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
  ],
})
export class PhotoComponent {
  private dialogRef: MatDialogRef<PhotoComponent> = Inject(MatDialogRef<PhotoComponent>);
  public cat: Cat;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cat: Cat },
  ) {
    this.cat = data.cat;
  }

  close(): void {
    this.dialogRef.close();
  }
}
