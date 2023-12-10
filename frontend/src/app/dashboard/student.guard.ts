import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const adminDetails = JSON.parse(localStorage.getItem('user') || 'null');

    if(adminDetails && adminDetails.role === 'student') {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}