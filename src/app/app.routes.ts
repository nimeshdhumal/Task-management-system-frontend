import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
    { path: "login", component: Login },
    {
        path: "", component: Shell,
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard }
        ]
    },
    { path: "**", redirectTo: 'login', pathMatch: 'full' }
];
