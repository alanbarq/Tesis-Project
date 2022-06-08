import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { PrsComponentComponent } from './prs-component/prs-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrcaPatientComponent } from './brca-patient/brca-patient.component';
import {MatIconModule} from '@angular/material/icon';
import { ChartModule } from 'angular-highcharts';
import { HypothesisComponent } from './hypothesis/hypothesis.component';
import { ResultsComponent } from './results/results.component';




@NgModule({
  declarations: [
    PrincipalComponent,
    PrsComponentComponent,
    BrcaPatientComponent,
    HypothesisComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    ChartModule,
  ],
  exports: [
    PrincipalComponent,
    PrsComponentComponent,
    BrcaPatientComponent,
    ResultsComponent
  ],
  providers: [
  ]
})
export class MainModule { }
