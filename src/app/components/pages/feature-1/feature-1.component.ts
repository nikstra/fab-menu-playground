import { Component, ViewChild } from '@angular/core';
import { FabComponent } from '../../common/fab/fab.component';


@Component({
  selector: 'app-feature-1',
  imports: [FabComponent],
  templateUrl: './feature-1.component.html',
  styleUrl: './feature-1.component.css',
})
export class Feature1Component {
  @ViewChild('appFab', { static: false }) appFab!: FabComponent;

  actionOneClick(e: Event): void {
    const button = e.target as HTMLButtonElement;
    window.setTimeout(() => alert(button.value));
    this.appFab.close();
  }

  actionTwoClick(e: Event): void {
    const button = e.target as HTMLButtonElement;
    window.setTimeout(() => alert(button.value));
    this.appFab.close();
  }
}
