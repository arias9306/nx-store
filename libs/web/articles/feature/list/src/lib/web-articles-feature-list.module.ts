import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webArticlesFeatureListRoutes } from './lib.routes';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(webArticlesFeatureListRoutes)],
  declarations: [ListComponent],
})
export class WebArticlesFeatureListModule {}
