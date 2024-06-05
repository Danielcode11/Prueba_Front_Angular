import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatBreedsComponent } from './components/cat-breeds/cat-breeds.component';
import { CatTableComponent } from './components/cat-table/cat-table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/breeds', pathMatch: 'full' },
  { path: 'breeds', component: CatBreedsComponent },
  { path: 'table', component: CatTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


