import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { LineChartComponent } from './cmps/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './views/login/login.component';
import { TransactionListComponent } from './cmps/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    ContactComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    StatisticsComponent,
    LineChartComponent,
    LoginComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
