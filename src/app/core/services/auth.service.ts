import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    login() {
        localStorage.setItem('logged', 'true');
    }
    logout() {
        localStorage.removeItem('logged');
    }
    isUserLoggedIn() {
        return localStorage.getItem('logged') === 'true';
    }
}