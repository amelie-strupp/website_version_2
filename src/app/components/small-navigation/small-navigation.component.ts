import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';

interface NavigationItem {
  text: string;
  anchor: string;
}
@Component({
  selector: 'app-small-navigation',
  templateUrl: './small-navigation.component.html',
  styleUrls: ['./small-navigation.component.sass'],

  animations: [
    trigger('markPositionAnimation', [
      transition(
        '* <=> *',
        [
          style({ left: '{{oldOffset}}px' }),
          animate('250ms ease-in-out', style({ left: '{{newOffset}}px' })),
        ],
        { params: { oldOffset: '0', newOffset: '0' } }
      ),
    ]),
  ],
})
export class SmallNavigationComponent implements OnInit {
  @Input() navigationItems: Array<NavigationItem> = [];

  selectedIndex = 0;
  oldMarkPosition = 0;
  markPosition = 0;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  lastElement = "";
  constructor(
    private router: Router,
    private elem: ElementRef,
    private route: ActivatedRoute,
    private cdref: ChangeDetectorRef
  ) {}

  navigate(index: number) {
    this.selectedIndex = index;
    this.router.navigate([], {
      fragment: this.navigationItems[index].anchor,
      relativeTo: this.route,
    });
    this.moveMark(index);
  }
  moveMark(index: number) {
    let element: HTMLElement =
      this.elem.nativeElement.querySelectorAll('.navigationItem')[index];
    this.oldMarkPosition = this.markPosition;
    this.markPosition =
      element.offsetLeft + element.clientWidth / 2 - 32;
  }
  moveMarkToAnchor(anchor: string){
    for(let itemIndex in this.navigationItems){
      if(this.navigationItems[itemIndex].anchor == anchor){
        this.selectedIndex = parseInt(itemIndex);
        this.moveMark(this.selectedIndex);
      }
    }
  }
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.moveMark(this.selectedIndex);
    });
  }
  minimumOffset = 0;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let elements = Array.from(document.getElementsByClassName('anchorElement'));
    let bestMatchingOffset = elements[0].getBoundingClientRect().top;
    let anchor = elements[0].getAttribute('data-anchor');
    for(let element of elements) {
      let br = element.getBoundingClientRect();
      if(bestMatchingOffset <= 0 && br.top <= 200 && br.top >= bestMatchingOffset){
        bestMatchingOffset = br.top;
        anchor = element.getAttribute('data-anchor');
        this.lastElement = anchor ?? '';
      }
    }
    
    setTimeout(() => {
              this.moveMarkToAnchor(this.lastElement);
          }, 600);
  }
  ngAfterViewInit(): void {
    // let elements = document.getElementsByClassName('anchorElement');
    // const currentNavigationObserver = new IntersectionObserver ( (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       let d = entry.target.getAttribute('data-anchor');
    //       setTimeout(() => {
    //         this.moveMarkToAnchor(this.lastElement);
    //     }, 500);
    //       let data = entry.target.getAttribute('data-anchor');
    //       this.lastElement = data ?? '';
    //     }
    //   });
    // });
    
    // Array.from(elements).forEach( function (element) {
    //   currentNavigationObserver.observe(element);
    // });




    this.router.navigate([], {
      fragment: this.route.snapshot.fragment ?? '',
      relativeTo: this.route,
    });
    if (this.markPosition == 0) {
      console.log('Called');
      this.moveMark(0);
      this.oldMarkPosition = this.markPosition;
      this.cdref.detectChanges();
    }
  }
}
