import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const adminDetails = JSON.parse(localStorage.getItem('user') || 'null');

    if(adminDetails && adminDetails.role === 'admin') {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}