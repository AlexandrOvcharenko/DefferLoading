import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-viewport-reviews',
  templateUrl: './viewport-reviews.html',
  styleUrl: '../payload-card.css',
})
export class ViewportReviews {
  readonly reviews = [
    { name: 'Olena', score: 5, text: 'Fast first render and predictable loading.' },
    { name: 'Taras', score: 4, text: 'The skeleton keeps the page stable while chunks load.' },
  ];
}
