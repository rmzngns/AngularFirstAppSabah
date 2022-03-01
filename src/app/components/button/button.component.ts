import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// components klasörü altına açtığımız componentlerin selector ismi bulunur. page componentler bu components klasörü altındaki componentlerden beslenirler. bu componentlerin @Input ile propsları tanımlanır. Page componentlerde props tanımlaması yapmaya ihtiyaç yoktur. kendimize bir çok sayfada kullanacağımız componentleri shared componentleri components klasörü altında toplarız.

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string = 'button';
  @Input() color: string = 'gray';
  // buttonda bir eylem gerçekleşince çalışacak olan event demek
  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();
  // btnClicked dili geçmiş zaman tipinde yazıyoruz.
  // emit raise denk gelir.
  // event emit ederek event fırlatırız.

  constructor() {}

  ngOnInit(): void {}

  btnClick() {
    // butona tıklanınca butonun title değerini component dışına fırlattık. bu event emitter ile yapıyoruz.
    this.btnClicked.emit(this.title);
  }
}
