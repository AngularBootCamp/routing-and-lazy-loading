import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// Note there is no import of the HrFilesSearchComponent or reference
// to './hr-files-search.component'.

const routes: Routes = [
  { path: '', redirectTo: 'hr', pathMatch: 'full' },
  {
    path: 'hr',
    loadChildren: () =>
      import('./hr-files/hr.module').then(m => m.HrModule)
  },
  {
    path: 'payroll',
    loadChildren: () =>
      import('./payroll/payroll.module').then(m => m.PayrollModule)
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false, // Turn this on to log routing events to the console
  scrollPositionRestoration: 'enabled'
  // ,preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
