import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.sass']
})
export class AccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * This event element will help to change the current view in the parent element <auth.component>.
   */
  @Output() routeView: EventEmitter<String> = new EventEmitter();

  /**
   * This event is emitted to the parent element <auth.component>.
   */
  changeView(view: String): void {
      this.routeView.emit(view);
  }
}
