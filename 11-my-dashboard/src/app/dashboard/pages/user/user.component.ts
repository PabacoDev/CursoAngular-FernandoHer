import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title.component';
import { routes } from '../../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  userService = inject(UsersService);

  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserByID(id))
    )
  );

  titleLabel = computed(
    () =>
      'Información del usuario: ' +
      this.user()?.first_name +
      ' ' +
      this.user()?.last_name
  );
}
