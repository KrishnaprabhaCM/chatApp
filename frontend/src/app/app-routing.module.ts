import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ActiveUsersComponent } from './components/chat/active-users/active-users.component';
import { AllUsersComponent } from './components/chat/all-users/all-users.component';
import { BlockedUsersComponent } from './components/chat/blocked-users/blocked-users.component';
import { ChangePwdComponent } from './components/chat/change-pwd/change-pwd.component';
import { ChatInterfaceComponent } from './components/chat/chat-interface/chat-interface.component';
import { DashboardChildComponent } from './components/chat/dashboard-child/dashboard-child.component';
import { DashboardComponent } from './components/chat/dashboard/dashboard.component';
import { MutedUsersComponent } from './components/chat/muted-users/muted-users.component';
import { CreateUsernameComponent } from './components/user/create-username/create-username.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { VerifyOTPComponent } from './components/user/verify-otp/verify-otp.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'verifyOTP/:_id',component:VerifyOTPComponent},
  {path:'username/:_id',component:CreateUsernameComponent},
  {path:'dashboard',canActivate: [AuthGuardService],component:DashboardComponent,
  children: [
    {path:'',component:ActiveUsersComponent},
    {path:'dashboard-child/:userName',component:DashboardChildComponent},
    {path:'active-users',component:ActiveUsersComponent},
    {path:'chat/:userName',component:ChatInterfaceComponent},
    {path:'all-users',component:AllUsersComponent},
    {path:'muted-users',component:MutedUsersComponent},
    {path:'blocked-users',component:BlockedUsersComponent},
    {path:'change-pwd',component:ChangePwdComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
