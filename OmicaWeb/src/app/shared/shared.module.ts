import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    MenuModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
