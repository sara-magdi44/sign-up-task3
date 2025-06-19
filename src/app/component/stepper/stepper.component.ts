import { Component, inject, signal } from '@angular/core';
import { ValidateComponent } from '../content/validate/validate.component';
import { AboutComponent } from '../content/about/about.component';
import { CompanyComponent } from '../content/company/company.component';
import { TeamComponent } from '../content/team/team.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  imports: [
    ValidateComponent,
    AboutComponent,
    CompanyComponent,
    TeamComponent,
    CommonModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
   private router = inject(Router);
  
  steps = [
    { label: 'Valid your phone' },
    { label: 'Tell about yourself' },
    { label: 'Tell about your company' },
    { label: 'Invite Team Members' }
  ];

  currentStep = signal(0);

  getIcon(currentStep: number, index: number): string {
    if (currentStep === index) {
      return '/assets/images/icon/active.svg';
    } else if (currentStep > index) {
      return '/assets/images/icon/complete.svg';
    } else {
      return '/assets/images/icon/inactive.svg';
    }
  }

  goToStep(index: number) {
    this.currentStep.set(index);
  }

next() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update((step: number) => step + 1);
    } else {
      this.router.navigate(['/final']);
    }
  }

  back() {
    if (this.currentStep() > 0) {
      this.currentStep.update((step: number) => step - 1);
    }
  }
}