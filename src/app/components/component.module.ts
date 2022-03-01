import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [ButtonComponent, SelectComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, SelectComponent], // componenti moduleden dışarı çıkartır.
})
export class ComponentModule {} // AppModule içerisine ComponentModule Import edip uygulama genelinde bu componenti kullanabiliriz. AppModule altındaki componentlerin sadece page component olmasına dikkat edelim.

// page component vs component
// page component @input @output ve selector yok, routing dosyasına tanımlanır
// normal component @input, @output ve selector var. Page componentlerden çağırılır. component.module.ts den dışarı export edilir.
