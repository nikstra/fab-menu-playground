import { Routes } from '@angular/router';
import { Feature1Component } from './components/pages/feature-1/feature-1.component';
import { Feature2Component } from './components/pages/feature-2/feature-2.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: 'feature-1', component: Feature1Component },
  { path: 'feature-2', component: Feature2Component },
  { path: '', component: HomeComponent },
];
