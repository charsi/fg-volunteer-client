import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './_components/app/app.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { MyShiftsComponent } from './_components/my-shifts/my-shifts.component';
import { SettingsComponent } from './_components/settings/settings.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'shifts', redirectTo: 'shifts/dismantle', canActivate: [AuthGuard] },
    { path: 'shifts/dismantle', component: ShiftsComponent, canActivate: [AuthGuard] },
    { path: 'shifts/test', component: ShiftsComponent, canActivate: [AuthGuard] },
    { path: 'shifts/build', component: ShiftsComponent, canActivate: [AuthGuard] },
    { path: 'shifts/clean', component: ShiftsComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginFormComponent },
    { path: 'myshifts', component: MyShiftsComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' },
    //{ path: '**', component: LoginFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);