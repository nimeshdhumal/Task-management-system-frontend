import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../core/services/auth.service';
interface NavItem {
  label: string;
  route: string;
}
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  authService = inject(AuthService);
  router = inject(Router);

  navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard' }
  ];

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
