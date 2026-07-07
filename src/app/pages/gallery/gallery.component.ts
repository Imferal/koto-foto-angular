import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Cat } from '../../shared/models/cat.model';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: false
})
export class GalleryComponent implements OnInit {
  loading = true;
  error: string | null = null;
  cats: Cat[] | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.apiService.getCats().subscribe({
      next: cats => {
        this.cats = this.cats
          ? [...this.cats, ...cats]
          : cats;
        this.loading = false;
      },
      error: () => {
        this.error = 'Не удалось загрузить фотографии.';
        this.loading = false;
      }
    });
  }


  trackById(index: number, cat: Cat): string {
    return cat.id;
  }
}
