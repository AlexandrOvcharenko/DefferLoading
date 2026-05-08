import { Component } from '@angular/core';

@Component({
  selector: 'app-prefetch-report-builder',
  templateUrl: './prefetch-report-builder.html',
  styleUrl: '../payload-card.css',
})
export class PrefetchReportBuilder {
  readonly metrics = ['Revenue', 'Retention', 'Activation', 'Latency'];
}
