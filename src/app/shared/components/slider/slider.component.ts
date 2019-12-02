import { Component, OnInit } from '@angular/core';
import {Slide} from '../../models/slide.model';
import {SlideService} from '../../services/slide.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {Requestt} from '../../models/requestt.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  slides: Slide;
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    question: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  name: string;
  phone: string;
  text: string;

  constructor(private slideService: SlideService,
              private requestService: RequestService) { }

  ngOnInit() {
    this.slideService.getSlides().subscribe((data: Slide) => {
      if (data) {
        this.slides = data;
      }
    });
  }

  submitForm() {
    const req = new Requestt(this.form.value.name, this.form.value.phone, this.form.value.question);
    this.requestService.addRequest(req).subscribe((data: Requestt) => {
      if (data) {
        this.name = '';
        this.phone = '';
        this.text = '';
      }
    });
  }
}
