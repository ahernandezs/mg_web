import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/share/page-not-found/index';
import { LoginComponent } from './components/login/index';
import { DashboardComponent } from './components/dashboard/index';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
