import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'aboutus', component: AboutUsComponent, canActivate: [AuthGuard] },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
      { path: ':id/:name/edit', component: EditUserComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'reactiveform', component: ReactiveFormsComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
