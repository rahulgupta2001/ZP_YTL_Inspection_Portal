import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // In a real app, you would check for a valid authentication token here
  // For this example, we'll assume a simple check
  const isLoggedIn = true; // Replace with a real service check

  const router = inject(Router);

  if (isLoggedIn) {
    return true; // Allow access to the route
  } else {
    // Redirect to the login page if the user is not logged in
    router.navigate(['/login']);
    return false;
  }
};
