import { Route } from '@angular/router';
import { ListComponent } from './list.component';

export const webArticlesFeatureListRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ListComponent },
];
