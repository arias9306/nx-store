import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webArticlesFeatureListRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(webArticlesFeatureListRoutes)],
})
export class WebArticlesFeatureListModule {}
