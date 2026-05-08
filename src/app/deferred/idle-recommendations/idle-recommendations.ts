import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-idle-recommendations',
  templateUrl: './idle-recommendations.html',
  styleUrl: '../payload-card.css',
})
export class IdleRecommendations {
  readonly articles = ['Signals and local state', 'Control flow syntax', 'Performance budgets'];
}
