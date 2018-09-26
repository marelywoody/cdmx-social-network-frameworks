import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { MuroComponent } from './component/muro/muro.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'muro', component: MuroComponent}
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }
