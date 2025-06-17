import { Component, signal  } from '@angular/core';
import { StepperComponent } from './component/stepper/stepper.component';
import { ContentComponent } from './component/content/content.component';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    StepperComponent,
    ContentComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'signup';
  currentStep = signal(0);
  onStepChange(newStep: number) {
    this.currentStep.set(newStep);
  }
}
