import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrcaPatientComponent } from './main/brca-patient/brca-patient.component';
import { PrincipalComponent } from './main/principal/principal.component';
import { PrsComponentComponent } from './main/prs-component/prs-component.component';
import { HypothesisComponent } from './main/hypothesis/hypothesis.component';
import { ResultsComponent } from './main/results/results.component';
const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    pathMatch:'full'
  },
  {
    path:'main',
    component:PrincipalComponent,
    pathMatch:'full'
  },
  {
    path:'main/prs',
    component:PrsComponentComponent,
    pathMatch:'full'
  },
  {
    path:'main/brca',
    component:BrcaPatientComponent,
    pathMatch:'full'
  },
  {
    path:'main/hypo',
    component:HypothesisComponent,
    pathMatch:'full'
  },
  {
    path:'main/results',
    component:ResultsComponent,
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
