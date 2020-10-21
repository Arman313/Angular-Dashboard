import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-widget',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.css']
})
export class DateWidgetComponent implements OnInit {

  today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
