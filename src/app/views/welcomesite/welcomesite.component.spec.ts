import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomesiteComponent } from './welcomesite.component';

describe('WelcomesiteComponent', () => {
  let component: WelcomesiteComponent;
  let fixture: ComponentFixture<WelcomesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
