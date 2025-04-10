import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  age = signal(45);
  name = signal('Ironman');

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizedName = computed(() => `${this.name().toLocaleUpperCase()}`);

  changeHero() {
    this.age.set(22);
    this.name.set('Spiderman');
  }

  resetForm() {
    this.age.set(45);
    this.name.set('Ironman');
  }

  changeAge() {
    this.age.set(60);
  }
}
