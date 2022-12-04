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
  link: string;
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
    this.router.navigate([this.navigationItems[index].link], {
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
      if(this.navigationItems[itemIndex].link == anchor){
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
  ngAfterViewInit(): void {
    const url = this.router.url;
    for (let itemIndex in this.navigationItems) {
      const rootUrl = url.split('/')[2];
      console.log(rootUrl)
      if (rootUrl == this.navigationItems[itemIndex].link.split('/')[2]) {
        this.selectedIndex = parseInt(itemIndex);
        this.moveMarkToAnchor(this.navigationItems[itemIndex].link);
            this.cdref.detectChanges();
        break;
      }
    }
    // if (this.markPosition == 0) {
    //   this.moveMark(0);
    //   this.oldMarkPosition = this.markPosition;
    //   this.cdref.detectChanges();
    // }
  }
}
