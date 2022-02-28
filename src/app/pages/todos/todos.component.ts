import { Component, OnInit } from '@angular/core';

// page componentlerde selector ismi olmaz. nedeni route ile yönlendirme ,ile bu component çağırılacaktır.
@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
