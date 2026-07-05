import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  @Input() public cat!: Cat;
  @Output() public toggleFavorite = new EventEmitter<Boolean>();

  public isFavorite: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.checkIsFavorite();
  }

  checkIsFavorite(): void {
    this.isFavorite = this.localStorageService.checkIsFavorite(this.cat.id);
  }

  handleFavoriteButtonClick(): void {
    if (this.isFavorite) {
      this.localStorageService.removeFromFavorites(this.cat.id);
      this.toggleFavorite.emit(true);
    } else {
      this.localStorageService.addToFavorites(this.cat);
    }

    this.checkIsFavorite();
  }
}
