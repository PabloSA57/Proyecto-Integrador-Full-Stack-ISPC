
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule
    
>>>>>>> 2ebd758155c79467f9e79f88bfeef91108d065b5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
