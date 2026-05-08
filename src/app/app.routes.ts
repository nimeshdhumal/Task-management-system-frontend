import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Shell } from './layout/shell/shell';
import { authGuard } from './core/services/auth.guard';

export const routes: Routes = [
    { path: "login", component: Login },
    {
        path: "", component: Shell,
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard, canActivate: [authGuard] }
        ]
    },
    { path: "**", redirectTo: 'login', pathMatch: 'full' }
];
