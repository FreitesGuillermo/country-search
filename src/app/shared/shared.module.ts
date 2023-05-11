import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    HomePagesComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,

  ],
  exports: [
    AboutPageComponent,
    HomePagesComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
