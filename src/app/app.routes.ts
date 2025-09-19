import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { InspectionFormComponent } from './inspection-form/inspection-form';
import { UserCreationFormComponent } from './user-creation-form/user-creation-form';
import { CeoDashboard } from './ceo-dashboard/ceo-dashboard';
import { ClerkDashboard } from './clerk-dashboard/clerk-dashboard';
import { InspectionReport } from './inspection-report/inspection-report';

import { KamForm } from './kam-form/kam-form'; // <-- NEW
import { authGuard } from './auth.guard';
import { YojnaForm } from './yojna-form/yojna-form';
import { InspectionOfficerComponent } from './inspection-form-component/inspection-form-component';
import { UserFormComponent } from './ceo-create-user/user-form';
import { CEOInspectionPage } from './ceo-inspection-page/inspection-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'ceo-dashboard',
    component: CeoDashboard,
    canActivate: [authGuard],
  },
  {
    path: 'clerk-dashboard',
    component: ClerkDashboard,
    canActivate: [authGuard],
  },
  {
    path: 'inspection-dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },

  {
    path: 'inspection-form',
    component: InspectionFormComponent,
    canActivate: [authGuard],
  },

  {
    path: 'inspection-report',
    component: InspectionReport,
    canActivate: [authGuard],
  },
  {
    path: 'inspection-officer-allotment',
    component: InspectionOfficerComponent,
    canActivate: [authGuard],
  },

  {
    path: 'create-user',
    component: UserCreationFormComponent,
    canActivate: [authGuard],
  },

  // --- NEW: Routes for the new forms ---
  {
    path: 'yojana',
    component: YojnaForm,
    canActivate: [authGuard],
  },
  {
    path: 'kam',
    component: KamForm,
    canActivate: [authGuard],
  },
  {
    path: 'ceo-create-user',
    component: UserFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'ceo-inspection-report',
    component: CEOInspectionPage,
    canActivate: [authGuard],
  },

  { path: '**', redirectTo: 'login' },
];
