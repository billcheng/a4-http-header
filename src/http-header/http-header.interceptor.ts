import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaderService } from './http-header.service';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(private header: HttpHeaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = {};
    this.header.getHeaders().forEach(p => headers[p.key] = p.value);

    const newReq = !!headers ? req.clone({ setHeaders: headers }) : req;

    return next
      .handle(newReq);
  }

}
