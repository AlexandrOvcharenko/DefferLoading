import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skeleton-block',
  templateUrl: './skeleton-block.html',
  styleUrl: './skeleton-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonBlock {
  readonly label = input('Placeholder');
  readonly compact = input(false);
}
