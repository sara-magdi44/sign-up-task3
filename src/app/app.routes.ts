import { Routes } from '@angular/router';
import { StepperComponent } from './component/stepper/stepper.component';
import { FinalSignupComponent } from './component/final-signup/final-signup.component';
export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: StepperComponent },
  { path: 'final', component: FinalSignupComponent }
];