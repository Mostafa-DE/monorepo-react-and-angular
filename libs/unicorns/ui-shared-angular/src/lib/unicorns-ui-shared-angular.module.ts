import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class UiSharedAngularModule {}
