import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './http-header.interceptor';
import { HttpHeaderService } from './http-header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeaderInterceptor,
    multi: true,
  },
    HttpHeaderService
  ],
})
export class HttpHeaderModule { }