import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  readonly apiUrl = 'http://188.226.91.215:43546/api/v1/';
}
