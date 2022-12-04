import { trigger, transition, style, animateChild, group, animate, query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { generateStringForAnimationFromRight, generateStringForAnimationFromLeft } from 'src/app/helperFunctions/animationHelpers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass'],
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
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['index'];
   }

}
