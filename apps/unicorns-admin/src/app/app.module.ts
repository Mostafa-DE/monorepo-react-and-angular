import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
// @ts-ignore
import {UiSharedAngularModule} from "@nx-monorepo/unicorns/ui-shared-angular";


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiSharedAngularModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    UiSharedAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
