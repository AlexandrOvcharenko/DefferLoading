import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-admin-tools',
  templateUrl: './conditional-admin-tools.html',
  styleUrl: '../payload-card.css',
})
export class ConditionalAdminTools {
  readonly tools = ['Audit log', 'Feature flags', 'User permissions'];
}
