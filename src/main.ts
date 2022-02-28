import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// const test: string = 'sadsad';

// function Deneme(title: string, age: number, data: any): void {}

// export interface IUser {
//   title: string;
// }

// export class Animal {
//   name: string = '';
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class interfaceden implement olabilir
// class sadece bir classtan extende olabilir.
// class tan kalıtım aldığımızda base yerine super keyword kullanırız.
// typescripte contructor constructor olarak yazılır.
// class yada interface başka bir ts dosyasında kullanılacak ise public yerine export edilir.

// export class Dog extends Animal implements IUser {
//   constructor(name: string) {
//     super(name); // base
//   }
//   title: string = 'Doggo';
// }

// const dog = new Dog('Golden');

// export interface ABase {}

// class AEntity implements ABase {}

// export class Repo<TEntity extends ABase> {
//   Add(entity: TEntity): void {}
// }

// var repos = new Repo<AEntity>();
// repos.Add(new AEntity());
// repos.Add('sadad');

// interface IModel {}

// class Model1 implements IModel {}

// class Model2 {}

// class Collection<T extends IModel> {
//   model = null;
//   // models: TModel[];
// }

// var c = new Collection<Model1>();
// var c2 = new Collection<Model2>();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
