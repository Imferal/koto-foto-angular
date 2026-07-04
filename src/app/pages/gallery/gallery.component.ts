import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Cat } from '../../shared/models/cat.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  cats: Cat[] | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCats(2).subscribe(cats => {
      this.cats = cats;
      console.log(this.cats);
    })
  }
}
