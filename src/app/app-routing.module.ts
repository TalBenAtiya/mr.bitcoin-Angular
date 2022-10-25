import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact/:id', component: ContactDetailsComponent},
  {path: 'contact', component: ContactComponent, children: [
    {path: 'edit/:id', component: ContactEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
