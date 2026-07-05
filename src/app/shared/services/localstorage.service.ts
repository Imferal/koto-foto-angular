import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(key: string): unknown {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  setItem(key: string, value: any): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFavoriteCats(): Cat[] | null {
    return this.getItem('favoriteCats') as Cat[] | null;
  }

  checkIsFavorite(id: string): boolean {
    const favoriteCats: Cat[] | null = this.getFavoriteCats();

    if (!favoriteCats || !favoriteCats.length) return false;

    return Boolean(favoriteCats.find(cat => cat.id === id));
  }

  addToFavorites(cat: Cat): void {
    let favoriteCats: Cat[] = this.getFavoriteCats() || [];
    favoriteCats = [...favoriteCats, cat];

    this.setItem('favoriteCats', favoriteCats);
  }

  removeFromFavorites(id: string): void {
    let favoriteCats: Cat[] = this.getFavoriteCats() || [];
    favoriteCats = favoriteCats.filter(cat => cat.id !== id);

    this.setItem('favoriteCats', favoriteCats);
  }
}
