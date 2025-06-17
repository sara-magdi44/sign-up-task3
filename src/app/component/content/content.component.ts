import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateComponent } from './validate/validate.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { TeamComponent } from './team/team.component';
@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    ValidateComponent,
    AboutComponent,
    CompanyComponent,
    TeamComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() step :number = 0 ;
  

}
