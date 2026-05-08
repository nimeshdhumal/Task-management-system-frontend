import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

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
  navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard' }
  ];
}
