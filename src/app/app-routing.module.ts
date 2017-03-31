import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/index';
import { ReportsComponent } from './components/reports/reports.component';

import { AuthGuard } from './utils/auth.guards';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'reports', component: ReportsComponent, canActivate:[AuthGuard] },
	{ path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
