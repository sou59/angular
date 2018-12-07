import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatFormFieldModule, MatCardModule, 
  MatNativeDateModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddComponent } from './jobs/add/add.component';
import { ListComponent } from './jobs/list/list.component';
import { DetailsComponent } from './jobs/details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: ListComponent},
  {path: 'jobs/add', component: AddComponent},
  {path: 'jobs/:id', component: DetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
