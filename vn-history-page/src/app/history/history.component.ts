import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <div>
      <h2>{{ 'HISTORY.TITLE' | translate }}</h2>
      <p>{{ 'HISTORY.INTRO' | translate }}</p>
      <ul class="history-list">
        <li>{{ 'HISTORY.EVENT1' | translate }}</li>
        <li>{{ 'HISTORY.EVENT2' | translate }}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class HistoryComponent {}