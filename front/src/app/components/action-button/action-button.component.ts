import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Output() onAction = new EventEmitter();
  @Input() isLoading = false;
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
  }
  doAction($event) {
    if (!this.isLoading) {
      this.onAction.emit($event);
    }
  }
}
