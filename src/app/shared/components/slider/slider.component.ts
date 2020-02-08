import {Component, OnDestroy, OnInit} from '@angular/core';
import {Slide} from '../../models/slide.model';
import {SlideService} from '../../services/slide.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {Requestt} from '../../models/requestt.model';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit, OnDestroy {

  slides: Slide;
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    question: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
  });
  name: string;
  phone: string;
  text: string;
  unsubscriber$ = new Subject<boolean>();

  constructor(
      private slideService: SlideService,
      private requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.slideService.getSlides()
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((data: Slide) => {
          if (data) {
            this.slides = data;
          }
    });
  }

  submitForm(): void {
    const req = new Requestt(this.form.value.name, this.form.value.phone, this.form.value.question);
    this.requestService.addRequest(req)
        .pipe(
            first(),
            takeUntil(this.unsubscriber$),
        ).subscribe((data: Requestt) => {
          if (data) {
            this.name = '';
            this.phone = '';
            this.text = '';
          }
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
