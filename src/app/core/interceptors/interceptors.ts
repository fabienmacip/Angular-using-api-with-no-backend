import {
  HttpClient,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export function tokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'),
  });

  console.group('Interceptor tokenInterceptor');
  console.log(req.url);
  console.log(req);
  console.groupEnd();
  return next(req);
}
