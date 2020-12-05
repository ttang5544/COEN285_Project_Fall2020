import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {

  get isNavigating$(): Observable<boolean> {
    return this.router.events.pipe(
      filter((event: RouterEvent) => this.isConsideredEvent(event)),
      map((event: RouterEvent) => this.isNavigationStart(event)),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  constructor(private router: Router) {

  }

  private isConsideredEvent(event: RouterEvent): boolean {
    return this.isNavigationStart(event)
      || this.isNavigationEnd(event);
  }

  private isNavigationStart(event: RouterEvent): boolean {
    return event instanceof NavigationStart;
  }

  private isNavigationEnd(event: RouterEvent): boolean {
    return event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError;
  }
}

