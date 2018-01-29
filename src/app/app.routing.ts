import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { MyshiftsComponent } from './_components/myshifts/myshifts.component';
import { SettingsComponent } from './_components/settings/settings.component';

const appRoutes: Routes = [
    { path: 'shifts', component: ShiftsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'myshifts', component: MyshiftsComponent },
    { path: 'settings', component: SettingsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' },
    //{ path: '**', component: LoginFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);