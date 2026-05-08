import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SkeletonBlock } from './components/skeleton-block/skeleton-block';
import { IdleRecommendations } from './deferred/idle-recommendations/idle-recommendations';
import { ViewportReviews } from './deferred/viewport-reviews/viewport-reviews';
import { InteractionComments } from './deferred/interaction-comments/interaction-comments';
import { HoverProfileCard } from './deferred/hover-profile-card/hover-profile-card';
import { TimerPromo } from './deferred/timer-promo/timer-promo';
import { ConditionalAdminTools } from './deferred/conditional-admin-tools/conditional-admin-tools';
import { PrefetchReportBuilder } from './deferred/prefetch-report-builder/prefetch-report-builder';

@Component({
  selector: 'app-root',
  imports: [
    SkeletonBlock,
    IdleRecommendations,
    ViewportReviews,
    InteractionComments,
    HoverProfileCard,
    TimerPromo,
    ConditionalAdminTools,
    PrefetchReportBuilder,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly showAdminTools = signal(false);
  protected readonly hasOpenedReportBuilder = signal(false);

  protected toggleAdminTools(): void {
    this.showAdminTools.update((value) => !value);
  }

  protected markReportBuilderIntent(): void {
    this.hasOpenedReportBuilder.set(true);
  }
}
