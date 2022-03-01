import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() cities: any[] = [];
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  selectChange(event: any) {
    console.log('event target value', event);
    this.selected.emit(event.target.value);
  }
}
