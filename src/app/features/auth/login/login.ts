import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials, LoginResponse } from '../../../core/models/auth.model';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  // एरर मैसेज को स्टोर करने के लिए वेरिएबल
  errorMessage: string | null = null;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  handleLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();// this method check all fields of login-form
      return;
    } else {
      // नया लॉगिन प्रयास शुरू होने पर पुराना एरर साफ करें
      this.errorMessage = null;
      const credentials: LoginCredentials = {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? ''
      }
      this.authService.login(credentials).subscribe({
        next: (response: LoginResponse) => {
          if (response.status && response.message?.token) {
            localStorage.setItem('token', response.message.token);
            this.router.navigate(['/dashboard']);
          }
        },

        error: (err) => {

          if (err?.error && typeof err.error === 'object') {
            this.errorMessage = err.error.message || err.error.error || 'PASSWORD INVALID';
          } else if (typeof err?.error === 'string') {
            this.errorMessage = err.error;
          } else {
            this.errorMessage = err?.message || 'Invalid email or password';
          }
          this.cdr.detectChanges();
          setTimeout(() => {
            this.errorMessage = null;
            this.cdr.detectChanges();
          }, 5000);
        }
      });
    }
  }
}
