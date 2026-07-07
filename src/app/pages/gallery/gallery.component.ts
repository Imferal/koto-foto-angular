import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Cat } from '../../shared/models/cat.model';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CatCardComponent } from '../../shared/components/cat-card/cat-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    MatButton,
    MatProgressSpinner,
    CatCardComponent,
    NgIf,
    NgFor,
  ],
})
export class GalleryComponent implements OnInit {
  private apiService = Inject(ApiService);
  loading = true;
  error: string | null = null;
  cats: Cat[] | null = null;

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.apiService.getCats().subscribe({
      next: (cats: Cat[]) => {
        this.cats = this.cats
          ? [...this.cats, ...cats]
          : cats;
        this.loading = false;
      },
      error: () => {
        this.error = 'Не удалось загрузить фотографии.';
        this.loading = false;
      },
    });
  }


  trackById(index: number, cat: Cat): string {
    return cat.id;
  }
}
