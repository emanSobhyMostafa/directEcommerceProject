import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customers/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurdGuard } from './Auth/auth-gaurd.guard';
import { WithnavbarComponent } from './helpersComponent/withnavbar/withnavbar.component';
import { WithoutnavbarComponent } from './helpersComponent/withoutnavbar/withoutnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavbarComponent,
    PageNotFoundComponent,
    WithnavbarComponent,
    WithoutnavbarComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [AuthGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
