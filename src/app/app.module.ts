import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list.component';
import { APP_CONFIG, DEFAULT_APP_CONFIG } from './app-config';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'products',  component: ProductListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }
  ],
  entryComponents: [
    HomeComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
