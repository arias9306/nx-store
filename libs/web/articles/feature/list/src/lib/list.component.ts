import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '@nx-store/shared/models';
import { ArticlesService } from '@nx-store/web/articles/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  articles$: Observable<Article[]> = this.articlesService.getArticles();

  constructor(private articlesService: ArticlesService) {}
}
