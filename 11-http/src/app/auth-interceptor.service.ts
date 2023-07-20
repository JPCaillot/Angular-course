import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const modifiedRequest = req.clone({
      url: 'https://angular-http-course-2aa64-default-rtdb.firebaseio.com/posts.json',
      headers: req.headers.append('Auth', 'lalala'),
    });

    return next.handle(modifiedRequest);
  }
}
