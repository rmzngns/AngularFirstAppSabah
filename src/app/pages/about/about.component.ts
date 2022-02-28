import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  names = [
    {
      name: 'mert',
      surname: 'corukoğlu',
    },
    {
      name: 'furkan',
      surname: 'bicer',
    },
    {
      name: 'ramazan',
      surname: 'güneş',
    },
    {
      name: 'razor',
      surname: 'raise',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  click(value: any) {
    alert(value);
  }
}
