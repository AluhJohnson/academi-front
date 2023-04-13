import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademiUserComponent } from './academi-user/academi-user.component';
import { AcademiLoginComponent } from './academi-login/academi-login.component';
import { AcademiHomeComponent } from './academi-home/academi-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademiUserComponent,
    AcademiLoginComponent,
    AcademiHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
