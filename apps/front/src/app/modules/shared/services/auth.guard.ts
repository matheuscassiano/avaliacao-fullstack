import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token') || null;
    if (token !== null) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
