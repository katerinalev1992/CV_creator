import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsComponent} from './settings/settings.component';
import {AuthGuard} from './services/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './login/signup.component';
import {UserQuestioneerComponent} from './user-questioneer/user-questioneer.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserQuestioneerComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
