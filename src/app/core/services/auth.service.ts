import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginCredentials, LoginResponse } from "../models/auth.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    httpClient = inject(HttpClient);

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, credentials);
    }
    logout() {
        localStorage.removeItem('logged');
    }
    isUserLoggedIn() {
        return localStorage.getItem('logged') === 'true';
    }
}