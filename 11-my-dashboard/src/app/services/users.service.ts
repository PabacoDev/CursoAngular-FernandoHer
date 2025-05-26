import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import {
  User,
  UserResponse,
  UsersResponse,
} from '../interfaces/user.interface';
import { delay, map, Observable } from 'rxjs';

interface State {
  users: any[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: [],
  });

  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserByID(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .pipe(
        delay(1500),
        map((resp) => resp.data)
      );
  }
}
