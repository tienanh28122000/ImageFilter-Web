import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './about/about.cache';


const AppRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'layer',component: AboutComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(AppRoutes,{enableTracing: true}), HttpClientModule, FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
