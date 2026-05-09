import { Component, inject } from '@angular/core';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  dashboardService = inject(DashboardService);
  stats = this.dashboardService.getDashboardStats();
}
