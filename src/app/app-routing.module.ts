import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiUserComponent } from './academi-user/academi-user.component';
import { AppComponent } from './app.component';
import { AcademiLoginComponent } from './academi-login/academi-login.component';
import { AcademiHomeComponent } from './academi-home/academi-home.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'academi-user', component: AcademiUserComponent },
  { path: 'academi-login', component: AcademiLoginComponent },
  { path: 'academi-home', component: AcademiHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
