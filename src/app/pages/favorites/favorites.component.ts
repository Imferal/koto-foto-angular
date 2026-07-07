import { Component, OnInit } from '@angular/core';
import { Cat } from '../../shared/models/cat.model';
import { LocalStorageService } from '../../shared/services/localstorage.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
    standalone: false
})
export class FavoritesComponent implements OnInit {
  public favoriteCats: Cat[] | null = null;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getFavoriteCats();
  }

  getFavoriteCats(): void {
    this.favoriteCats = this.localStorageService.getFavoriteCats();
  }

  trackById(index: number, cat: Cat): string {
    return cat.id;
  }
}
