import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService._trendingScrollState;
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.setTrendingScrollState = scrollTop;

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
