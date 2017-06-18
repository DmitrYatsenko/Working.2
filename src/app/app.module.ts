import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
@NgModule({
  declarations: [
      AppComponent,
      FilmCardComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule,
      MaterialModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
