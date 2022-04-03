import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter, fromEvent, Observable, Subscription } from 'rxjs';
import { generateStringForAnimationFromLeft, generateStringForAnimationFromRight } from './helperFunctions/animationHelpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnimations', [
      transition(generateStringForAnimationFromRight(0, 10), [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(
            ':leave',
            [animate('300ms ease-out', style({ left: '100%' }))],
            { optional: true }
          ),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
            optional: true,
          }),
        ]),
      ]),
      transition(generateStringForAnimationFromLeft(0, 10), [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        query(':enter', [style({ left: '100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(
            ':leave',
            [animate('300ms ease-out', style({ left: '-100%' }))],
            { optional: true }
          ),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
            optional: true,
          }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Dietrich Neuhaus';
  smallNavigation = false;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  constructor(private contexts: ChildrenOutletContexts, private router: Router) {}
  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['index'];
   }

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.adjustNavigation(window.innerWidth);
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.adjustNavigation(window.innerWidth);
    });
  }

  adjustNavigation(width: number) {
    if (width > 900) {
      this.smallNavigation = false;
    } else {
      this.smallNavigation = true;
    }
  }
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
