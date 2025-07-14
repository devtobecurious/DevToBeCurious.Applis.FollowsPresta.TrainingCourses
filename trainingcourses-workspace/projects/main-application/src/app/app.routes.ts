import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sessions',
    loadChildren: () => import('training-sessions').then(m => m.sessionsRoutes)
  }
];
