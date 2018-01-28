import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './_components/header/header.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';

import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';

import { AuthService } from './_services/auth.service';

import { MyHttpInterceptor } from './my-http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    AlertComponent,
    ShiftsComponent,
    NavbarComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AlertService,
    AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
