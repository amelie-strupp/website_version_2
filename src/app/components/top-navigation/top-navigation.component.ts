import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, first, fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass'],
  animations: [
    trigger('topMarkPositionAnimation', [
      transition(
        '* => *',
        [
          style({ left: '{{oldOffset}}px' }),
          animate('250ms ease-in-out', style({ left: '{{newOffset}}px' })),
        ],
        { params: { oldOffset: '0', newOffset: '0' } }
      ),
    ]),
  ],
})
export class TopNavigationComponent implements OnInit {
  items = [
    { text: 'Zur Einführung', link: '/home' },
    { text: 'Vita in Versen', link: '/vita' },
    { text: 'Werk', link: '/work/diverse_verse' },
    { text: 'Shop', link: '/shop/buecher' },
    { text: 'Kontakt', link: '/contact' },
  ];
  selectedIndex = 0;
  oldMarkPosition = 0;
  hasBeenSet = false;
  markPosition = 32;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  constructor(
    private router: Router,
    private elem: ElementRef,
    private cdref: ChangeDetectorRef
  ) {

  }
  getMarkPosition(){
    return this.markPosition;
  }
  navigate(index: number) {
    this.selectedIndex = index;
    this.router.navigate([this.items[index].link]);
  }
  moveMark(index: number) {
    let element: HTMLElement =
      this.elem.nativeElement.querySelectorAll('.topNavigationItem')[index];
    this.oldMarkPosition = this.markPosition;
    
    this.markPosition =
      element.offsetLeft + element.clientWidth / 2 - 32;
      console.log(this.markPosition);
  }
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.moveMark(this.selectedIndex);
      this.adjustUrl(this.router.url);
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((value: any) => {
        this.adjustUrl(value.url);
      });
      
  }
  adjustUrl(url: string) {
    console.log("URL: " + url);
    if(url == '/'){
      this.selectedIndex = 0;
      this.moveMark(0);
    }
    for (let itemIndex in this.items) {
      const rootUrl = url.split('/')[1].split('/')[0];
      if (rootUrl == this.items[itemIndex].link.split('/')[1].split('/')[0]) {

        this.selectedIndex = parseInt(itemIndex);
        this.moveMark(this.selectedIndex);
        break;
      }
    }
  }
  ngAfterViewInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart)).pipe(first())
      .subscribe((value: any) => {
        this.adjustUrl(value.url);
        this.cdref.detectChanges();
      });
  }
}
