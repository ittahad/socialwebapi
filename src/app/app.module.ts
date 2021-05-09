import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FriendsPostsComponent } from './friends-posts/friends-posts.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FriendsComponent,
    MyPostsComponent,
    FriendsPostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatBadgeModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
