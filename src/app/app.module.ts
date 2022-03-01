import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ButtonComponent } from './components/button/button.component';
import { ComponentModule } from './components/component.module';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    TestComponent,
  ], // uygulama içerisinde kullanılacak componentlerin tanımları yapılır
  imports: [
    BrowserModule, // kendi uygulama modüllerimiz + npm yüklenen paket modülleri
    AppRoutingModule,
    ComponentModule,
  ],
  providers: [], // uygulama içerisinde kullanılan servisler.
  bootstrap: [AppComponent], // uygulamanın init olacağı component
})
export class AppModule {}
