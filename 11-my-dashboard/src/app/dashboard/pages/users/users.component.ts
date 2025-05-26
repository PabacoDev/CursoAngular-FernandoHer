import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '../../../shared/title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterLink],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  usersService = inject(UsersService);
}
