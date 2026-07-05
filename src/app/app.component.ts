import { Component, Input } from '@angular/core';
import { Cat } from './shared/models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() cat!: Cat;
}
