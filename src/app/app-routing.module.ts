import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./component/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'hello',
    loadChildren: () => import('./component/hello/hello.module').then(mod => mod.HelloModule)
  },
  {
    path: 'hello1',
    loadChildren: () => import('./component/hello1/hello1.module').then(mod => mod.Hello1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
