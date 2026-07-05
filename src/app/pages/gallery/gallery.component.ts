import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Cat } from '../../shared/models/cat.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  cats: Cat[] | null = null;
  private subscription: Subscription | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.subscription = this.apiService.getCats().subscribe(cats => {
      this.cats = this.cats
        ? [...this.cats, ...cats]
        : cats;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
