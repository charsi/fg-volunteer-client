import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShiftsComponent } from './_components/shifts/shifts.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';

const appRoutes: Routes = [
    { path: 'shifts', component: ShiftsComponent },
    { path: 'profile', component: ProfileComponent },
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
    { path: '**', component: LoginFormComponent }
];

export const routing = RouterModule.forRoot(appRoutes);