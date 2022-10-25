import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/chat/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyOTPComponent } from './components/user/verify-otp/verify-otp.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ActiveUsersComponent } from './components/chat/active-users/active-users.component';
import { AllUsersComponent } from './components/chat/all-users/all-users.component';
import { MutedUsersComponent } from './components/chat/muted-users/muted-users.component';
import { BlockedUsersComponent } from './components/chat/blocked-users/blocked-users.component';
import { ChangePwdComponent } from './components/chat/change-pwd/change-pwd.component';
import { DashboardChildComponent } from './components/chat/dashboard-child/dashboard-child.component';
import { CreateUsernameComponent } from './components/user/create-username/create-username.component';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    VerifyOTPComponent,
    ActiveUsersComponent,
    AllUsersComponent,
    MutedUsersComponent,
    BlockedUsersComponent,
    ChangePwdComponent,
    DashboardChildComponent,
    CreateUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    PasswordStrengthMeterModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
