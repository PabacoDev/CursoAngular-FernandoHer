import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => !route.redirectTo)
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    const dashboardRoutes = routes
      .map((route) => route.children ?? [])
      .flat()
      .filter((route) => !route.redirectTo)
      .filter((route) => route && route.path)
      .filter((route) => !route.path?.includes(':'));

    console.log(dashboardRoutes);
  }
}
