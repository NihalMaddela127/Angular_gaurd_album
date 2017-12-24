import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashcompComponent } from './dashboard/dashcomp/dashcomp.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    Comp1Component,
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {path:'welcome', component : WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo: 'welcome', pathMatch:'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
