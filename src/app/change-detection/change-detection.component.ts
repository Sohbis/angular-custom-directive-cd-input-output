import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',

  styleUrls: ['./change-detection.component.css'],
})
export class ChangeDetectionComponent implements OnInit {
  time: number;
  timeSubscription: Subscription;
  @Input() greet: string;
  @Output() myGreet = new EventEmitter<string>();
  @ViewChild('ele', { static: true }) ele: ElementRef;
  constructor(private ref: ChangeDetectorRef, private renderer: Renderer2) {
    // this.ref.detach();
  }

  ngOnInit() {
    console.log('ele', this.ele.nativeElement);
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }
  ngAfterViewInit() {
    this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'gray');
  }
  start() {
    this.myGreet.emit(this.greet == 'Hello' ? 'World' : 'Hello');
    this.timeSubscription = interval(1)
      .pipe(
        take(100), // 0, 1, ..., 1000
        map((time) => {
          // console.log('time', time);
          return time * 10;
        })
      )
      .subscribe((time) => {
        this.time = time;
        // manually trigger the change detection every second
        if (this.time % 10 === 0) {
          this.ref.detectChanges();
        }
      });
  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }
}
