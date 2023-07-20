import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AppComponent as AssignmentComponent } from './app-assignment/app.component';
import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';

import { ActiveUsersComponent } from './app-assignment/active-users/active-users.component';
import { AppComponent } from './app.component';
import { InactiveUsersComponent } from './app-assignment/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
