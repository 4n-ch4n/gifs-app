import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {
  private trendingScrollState = signal(0);

  get _trendingScrollState() {
    return this.trendingScrollState();
  }

  set setTrendingScrollState(state: number) {
    if (state < 0) return;
    this.trendingScrollState.set(state);
  }

}
