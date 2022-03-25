import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { FormUserComponent } from './components/form-user/form-user.component';

//materialize components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './shared/services/user.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    UserComponent,
    FormUserComponent,
    UserListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
