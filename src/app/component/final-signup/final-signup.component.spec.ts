import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSignupComponent } from './final-signup.component';

describe('FinalSignupComponent', () => {
  let component: FinalSignupComponent;
  let fixture: ComponentFixture<FinalSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
