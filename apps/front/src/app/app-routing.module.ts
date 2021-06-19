import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'registros',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
