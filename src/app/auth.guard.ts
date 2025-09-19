import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();
  const userRole = authService.getRole();
  const requiredRole = route.data?.['role']; // role from routes

  if (!isLoggedIn) {
    // 🚫 Not logged in → go to login
    router.navigate(['/login']);
    return false;
  }

  if (requiredRole && userRole !== requiredRole) {
    // 🚫 Logged in but wrong role → block
    router.navigate(['/login']);
    return false;
  }

  return true; // ✅ Logged in and role matches
};
