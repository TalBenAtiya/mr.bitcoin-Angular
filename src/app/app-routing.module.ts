import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './services/guards/login.guard';
import { ContactResolver } from './services/resolvers/contact.resolver';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { StatisticsComponent } from './views/statistics/statistics.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver },
        canActivate: [LoginGuard],
      },

      {
        path: 'edit',
        component: ContactEditComponent,
        resolve: { contact: ContactResolver },
        canActivate: [LoginGuard],
      }

    ]
  },

  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
