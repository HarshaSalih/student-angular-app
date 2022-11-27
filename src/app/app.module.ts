import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:StudentViewComponent
  },
  {
    path:"delete",
    component:StudentDeleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    NavBarComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
