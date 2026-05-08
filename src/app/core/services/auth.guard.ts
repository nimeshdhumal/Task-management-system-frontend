import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isUserLoggedIn()) {
        return true;
    } else {
        return router.createUrlTree(['/login']);
    }
}