import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule, DropdownModule, DialogModule, BlockUIModule, PanelModule, ButtonModule, SharedModule } from 'primeng/primeng';

import { LoginComponent } from './components/login/index';
import { AccessComponent } from './components/login/access/index';

import { DashboardComponent } from './components/reports/dashboard/index';
import { OperationComponent } from './components/reports/operation/operation.component';
import { CompleteComponent } from './components/reports//complete/complete.component';
import { BillingComponent } from './components/reports//billing/billing.component';
import { ClarificationComponent } from './components/reports//clarification/clarification.component';
import { ReportsComponent } from './components/reports/reports.component';

import { ReportsService } from './services/reports.services';
import { AuthService } from './services/auth.services';
import { HttpClient } from './services/http.service';

import { AuthGuard } from './utils/auth.guards';
import { Utils } from './utils/utils';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessComponent,
    DashboardComponent,
    OperationComponent,
    CompleteComponent,
    BillingComponent,
    ClarificationComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    DialogModule,
    BlockUIModule,
    PanelModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    ReportsService,
    AuthService,
    HttpClient,
    AuthGuard,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
