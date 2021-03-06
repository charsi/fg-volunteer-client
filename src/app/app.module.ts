import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './_guards/auth.guard';
import { routing } from './app.routing';

import { AlertService } from './_services/alert.service';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { ShiftService } from './_services/shift.service';

import { MyHttpInterceptor } from './my-http-interceptor';

import { AppComponent } from './_components/app/app.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { MyShiftsComponent } from './_components/my-shifts/my-shifts.component';
import { SettingsComponent } from './_components/settings/settings.component';
import { SignupModalComponent } from './_components/signup-modal/signup-modal.component';
import { AdminUsersComponent } from './_components/admin-users/admin-users.component';
import { AdminShiftsComponent } from './_components/admin-shifts/admin-shifts.component';
import { AdminUsersAddComponent } from './_components/admin-users-add/admin-users-add.component';
import { AdminShiftsAddComponent } from './_components/admin-shifts-add/admin-shifts-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    AlertComponent,
    ShiftsComponent,
    ProfileComponent,
    MyShiftsComponent,
    SettingsComponent,
    SignupModalComponent,
    AdminUsersComponent,
    AdminShiftsComponent,
    AdminUsersAddComponent,
    AdminShiftsAddComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
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
