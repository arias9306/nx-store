import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'articles',
    loadChildren: () =>
      import('@nx-store/web/articles/feature/list').then(
        (module) => module.WebArticlesFeatureListModule
      ),
  },
];
