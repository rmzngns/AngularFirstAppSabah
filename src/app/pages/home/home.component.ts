import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  /*

  useEffect(() => {

    timer = setInterval(() => {
       setState(counter + 1);
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  }, []);

  */

  // ReactJs deki props'a karşılık gelir.
  // Angularda componente dışarıdan değer göndermek için @Input() directive kullanırız.
  @Input() title: string = '';
  @Input() content: string = '';

  visible: boolean = false;

  timeOut: any;
  timer: any;
  counter: number = 0;

  constructor() {}

  // uygulamada kaynak tüketimini dengeli kullanmak adına component içerisinde bir timer açık ise onu kapat, yada store dinleniyorsa onu unsubscribe et gibi mekanizmalarda kullanılır.
  ngOnDestroy(): void {
    console.log('home destroy');
    clearInterval(this.timer);
    clearTimeout(this.timeOut);
  }

  // dışarıdan bu component'e gönderilen bir input değerinin değişiminde bu hook tetiklenir.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);

    if (changes.title.currentValue == 'clicked') {
      alert('tıklandı');
      this.visible = true;
    }
  }

  loadData() {
    alert('Data Loading');
  }

  ngOnInit(): void {
    console.log('home component init');
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);

    // set TimeOut 1 kez
    this.timeOut = setTimeout(() => {
      if (this.counter % 5 == 0) {
        alert('5 in katları');
      }

      console.log('time out');
    }, 6000);
  }
}
