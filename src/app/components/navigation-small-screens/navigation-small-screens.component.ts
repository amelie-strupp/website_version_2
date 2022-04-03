import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, fromEvent, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation-small-screens',
  templateUrl: './navigation-small-screens.component.html',
  styleUrls: ['./navigation-small-screens.component.sass'],
  animations: [
    trigger('expanded', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'true',
        style({
          height: '*',
        })
      ),
      state(
        'false',
        style({
          height: '0px',
        })
      ),
      transition('* => *', animate('250ms ease-in-out')),
    ]),
    trigger('overlayVisible', [
      state(
        'void',
        style({
          opacity: '0',
        })
      ),
      state(
        'true',
        style({
          opacity: '0.3',
        })
      ),
      state(
        'false',
        style({
          opacity: '0',
          'pointer-events': 'none' 
        })
      ),
      transition('* => *', animate('250ms ease-in-out')),
    ]),
  ],
})
export class NavigationSmallScreensComponent implements OnInit {
  expanded = false;
  items = [
    { text: 'Zur Einführung', link: '/home' },
    { text: 'Vita in Versen', link: '/vita' },
    { text: 'Werk', link: '/work' },
    { text: 'Shop', link: '/shop' },
    {text: 'Kontakt', link: '/contact'},
  ];
  selectedIndex = 0;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if(this.expanded){
      this.expanded = false;
    }
  }
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.adjustUrl(this.router.url);
    });
      this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(
        (value: any)=>{
          this.adjustUrl(value.url)
        }
      )
  }
  adjustUrl(url: string){
    for(let itemIndex in this.items){
            if(url == this.items[itemIndex].link){
              this.selectedIndex = parseInt(itemIndex);
              break;
            }
          }
  }
}
