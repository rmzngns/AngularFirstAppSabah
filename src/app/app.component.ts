import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

// meta data
@Component({
  selector: 'app-root', // componentin diğer sayfalardan çağrılma ismi
  templateUrl: './app.component.html', // html dosyası konumu
  styleUrls: ['./app.component.css'], // css konumu
})
export class AppComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  showHome = true;

  // component içerisinde bir diğişim olduğunda tetiklenir.
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
  }

  // afterviewinit ise component içerisinde başka bir component çağırılmış ise bu componentler yani child componentler bu hookda intialize olur.
  ngAfterViewInit(): void {
    console.log('afterviewinit', this.homeComponent);
  }
  // Component domdan kaldırıldığında tetiklenen hook. reactjs de bu hook yoktur.
  ngOnDestroy(): void {
    console.log('component kaldırılıyor');
  }
  // UseEffect boş parametreli haline benzer, component initialize olduğunda ilk çalışan hook. apiden veri çekme işlemlerini bu hook da yaparız.
  ngOnInit(): void {
    console.log('onInit', this.homeComponent);
  }
  title = 'AngularFirstApp';

  // angularda fonksiyon tanımlamaları için const ve arrow function yazım şeklini kullanmıyoruz.
  click() {
    // class methoduna erişiyoruz.
    this.title = 'clicked'; // change detection strategy ile use state gibi bir yapı kullanmadan direk state değişikliği yapabiliriz.
    // alert('clicked');
    this.showHome = !this.showHome;
  }

  // useRef ReactJS deki
  @ViewChild(HomeComponent)
  homeComponent!: HomeComponent;

  loadData() {
    this.homeComponent.loadData();
  }
}
