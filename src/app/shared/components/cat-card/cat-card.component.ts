import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input() public id!: string;
  @Input() public url!: string;

  public isFavorite: boolean = false;
}
