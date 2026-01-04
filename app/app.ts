import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Osoba } from './interfejs';

@Component({
  standalone: true, // komponent działa wtedy samodzielenie, niezależnie, bez konieczności deklarowania go w module NgModule,
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  template: `
    <p [style.background-color]="kolor" [style.text-align]="jak">
      Nazywam się {{osoba.imie}} {{osoba.nazwisko}}
    </p>

    <label>
      <input type="checkbox" [(ngModel)]="pokazZdjecie">
      Pokaż zdjęcie
    </label>

    <div id="ramka">
      <img
        src="{{osoba.zdjecie}}"
        [class.zdjecie]="aktywna"
        *ngIf="pokazZdjecie; else brakZdjecia">
    </div>

    <button
      (click)="zmienKolor()"
      type="button"
      [class.przycisk]="aktywna">
      Zmień kolor tła
    </button>

    <ng-template #brakZdjecia>
      <img src="{{osoba.bezZdjecia}}" class="zdjecie">
      <p class="tekst_srodek">Inne zdjęcie - Laptop</p>
    </ng-template>

    <router-outlet />
  `,
  styleUrls: ['./app.css']
})
export class App {

  osoba: Osoba = {
    imie: 'Tadeusz',
    nazwisko: 'Nowak',
    zdjecie: 'images/obraz_1.png',
    bezZdjecia: 'images/obraz_2.png'
  };

  kolor: string = 'yellow';
  jak: string = 'center';
  aktywna: boolean = true;
  pokazZdjecie: boolean = false;

  zmienKolor() {
    this.kolor = this.kolor === 'yellow' ? 'green' : 'yellow';
  }
}

