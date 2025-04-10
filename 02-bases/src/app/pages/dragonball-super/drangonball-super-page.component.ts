import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/navbar/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/shared/navbar/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './drangonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
