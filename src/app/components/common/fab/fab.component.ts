import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [],
  template: `
    @if(visible) {
    <div class="fab-bar">
      <ng-content></ng-content>
      <button (click)="close()">{{ closeButtonText }}</button>
    </div>
    }
  `,
  styleUrl: './fab.component.css',
})
export class FabComponent {
  @Input() closeButtonText: string = 'Close';

  visible: boolean = false;

  close(): void {
    this.visible = false;
  }

  open(): void {
    this.visible = true;
  }
}
