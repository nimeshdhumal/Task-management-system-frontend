import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Shell } from './layout/shell/shell';
import { authGuard } from './core/services/auth.guard';
import { TaskList } from './features/task/task-list/task-list';
import { TaskCreate } from './features/task/task-create/task-create';

export const routes: Routes = [
    { path: "login", component: Login },
    {
        path: "", component: Shell,
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
            { path: 'tasks', component: TaskList },
            { path: "tasks/create", component: TaskCreate }
        ]
    },
    { path: "**", redirectTo: 'login', pathMatch: 'full' }
];
