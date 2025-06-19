import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  imports: [],
  templateUrl: './validate.component.html',
  styleUrl: './validate.component.scss'
})
export class ValidateComponent {
  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  otp: string[] = ['', '', '', ''];

onOtpInput(event: any, index: number) {
  const inputChar = event.data || event.target.value;    
  const isNumber = /^[0-9]$/.test(inputChar);

  if (!isNumber) {
    event.target.value = '';
    this.otp[index] = '';
    return;
  }

  this.otp[index] = inputChar;

  if (index < this.otp.length - 1) {
    const nextInput = event.target.parentElement.querySelectorAll('input')[index + 1];
    nextInput.focus();
  }
}



}
