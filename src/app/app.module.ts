import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';

import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { ShiftService } from './_services/shift.service';

import { MyHttpInterceptor } from './my-http-interceptor';

import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { MyshiftsComponent } from './_components/myshifts/myshifts.component';
import { SettingsComponent } from './_components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    AlertComponent,
    ShiftsComponent,
    ProfileComponent,
    MyshiftsComponent,
    SettingsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthService,
    UserService,
    ShiftService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
