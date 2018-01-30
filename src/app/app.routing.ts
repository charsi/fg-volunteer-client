import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './_components/app/app.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { MyShiftsComponent } from './_components/my-shifts/my-shifts.component';
import { SettingsComponent } from './_components/settings/settings.component';

const appRoutes: Routes = [
    { path: 'shifts', redirectTo: 'shifts/dismantle' },
    { path: 'shifts/dismantle', component: ShiftsComponent },
    { path: 'shifts/test', component: ShiftsComponent },
    { path: 'shifts/build', component: ShiftsComponent },
    { path: 'shifts/clean', component: ShiftsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'myshifts', component: MyShiftsComponent },
    { path: 'settings', component: SettingsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' },
    //{ path: '**', component: LoginFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);