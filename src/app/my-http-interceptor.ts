import { Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { AuthService } from './_services/auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
	constructor(private injector: Injector) { }
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const auth = this.injector.get(AuthService); // https://github.com/angular/angular/issues/18224
		const Authorization = auth.getToken(); //read the token from storage
		const authReq = req.clone({ 
			headers: req.headers.set('authorization', Authorization)
		}); // Clone the request to add the authorization header.
		console.log('intercepted header:' + authReq);
		return next.handle(authReq); // Pass on the cloned request instead of the original request.
	}
}
