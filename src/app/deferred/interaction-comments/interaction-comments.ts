import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-interaction-comments',
  templateUrl: './interaction-comments.html',
  styleUrl: '../payload-card.css',
})
export class InteractionComments {
  readonly comments = ['First deferred comment loaded.', 'Keyboard interaction works too.'];
}
