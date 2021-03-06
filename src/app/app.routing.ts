import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './_components/app/app.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { MyShiftsComponent } from './_components/my-shifts/my-shifts.component';
import { SettingsComponent } from './_components/settings/settings.component';
import { AdminUsersComponent } from './_components/admin-users/admin-users.component';
import { AdminShiftsComponent } from './_components/admin-shifts/admin-shifts.component';
import { AdminUsersAddComponent } from './_components/admin-users-add/admin-users-add.component';
import { AdminShiftsAddComponent } from './_components/admin-shifts-add/admin-shifts-add.component';

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
    { path: 'admin/users', component: AdminUsersComponent, canActivate: [AuthGuard] },
    { path: 'admin/shifts', component: AdminShiftsComponent, canActivate: [AuthGuard] },
    { path: 'admin/users/add', component: AdminUsersAddComponent, canActivate: [AuthGuard] },
    { path: 'admin/shifts/add', component: AdminShiftsAddComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' },
    //{ path: '**', component: LoginFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);