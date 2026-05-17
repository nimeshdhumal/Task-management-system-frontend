import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginCredentials, LoginResponse } from "../models/auth.model";
import { Observable } from "rxjs";
import { environment } from "../../../assets/environments/environment";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    httpClient = inject(HttpClient);

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, credentials);
    }
    logout() {
        localStorage.removeItem('token');
    }
    isUserLoggedIn() {
        return !!localStorage.getItem('token');
    }
}