import { Component, EventEmitter, Input , Output  } from '@angular/core';
@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  steps = [
      { label: 'Valid your phone' },
      { label: 'Tell about yourself' },
      { label: 'Tell about your company' },
      { label: 'Invite Team Members' }
    ];
  getICon(currentStep: number, index: number): string {
    if (currentStep === index ){
      return '/assets/images/icon/active.svg';
    } else if(currentStep > index){
      return '/assets/images/icon/complete.svg';
    }
    else {
      return '/assets/images/icon/inactive.svg';
    }
  }

  @Input() currentStep = 0;
  @Output() stepChange = new EventEmitter<number>();


  goToStep(index: number) {
    this.stepChange.emit(index);
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.stepChange.emit(this.currentStep + 1);
    }
  }

  back() {
    if (this.currentStep > 0) {
      this.stepChange.emit(this.currentStep - 1);
    }
  }
  
  

}

