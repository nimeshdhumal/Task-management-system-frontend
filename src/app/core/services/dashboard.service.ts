import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getDashboardStats() {
    return [
      { title: 'Total', count: 24 },
      { title: 'Completed', count: 6 },
      { title: 'Pending', count: 18 }
    ];
  }
}
