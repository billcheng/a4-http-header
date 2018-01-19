# a4-http-header-interceptor
Angular 4+ Http Header Interceptor

# How-To
## Install
```
npm install a4-http-header-interceptor
```

## app.module.ts
1. Add ```HttpModule``` to imports of the ```app.module.ts```.

```typescript

...
import { HttpHeaderModule } from 'a4-http-header-interceptor';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    HttpHeaderModule,
    ...
  ],
  ...
})
```

## Inject the service
```typescript
constructor(private httpHeaderService: HttpHeaderService) { }
```

## Inject custom header to every http client operations
```typescript
this.httpHeaderService.setHeader('key','value');
```
