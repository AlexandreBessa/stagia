import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Input() pageTitle: string = '';
  @Input() pageSubtitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
