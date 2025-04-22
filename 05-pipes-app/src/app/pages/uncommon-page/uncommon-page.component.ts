import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const cliente1 = {
  name: 'Paco',
  gender: 'male',
  age: '20',
  address: 'Seville, Spain',
};

const cliente2 = {
  name: 'Melissa',
  gender: 'female',
  age: '40',
  address: 'Seville, Spain',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  cliente = signal(cliente1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.cliente() == cliente1) {
      this.cliente.set(cliente2);
      return;
    }
    this.cliente.set(cliente1);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'María',
    'Pedro',
    'Fernando',
    'Paco',
    'Juan',
    'Andrea',
    'Carlos',
    'Melissa',
    'Natalia',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'Paco',
    age: 20,
    address: 'Seville, Spain',
  };

  // AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}
