import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {Auth2Service} from './auth2.service';
import {TokenService} from './token.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getAccessToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
