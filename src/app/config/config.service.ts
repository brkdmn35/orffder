import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage'

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(public localStorage: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var token = this.localStorage.get('token');
    if(!token){
      token = 'create';
    }
    const apiReq = req.clone({ url: `http://www.orffder.org/${req.url}` ,
    setHeaders: {
      token: `${token}`
    }
  });
    return next.handle(apiReq);
  }
}
