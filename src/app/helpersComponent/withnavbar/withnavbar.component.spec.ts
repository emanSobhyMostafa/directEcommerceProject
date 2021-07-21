import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithnavbarComponent } from './withnavbar.component';

describe('WithnavbarComponent', () => {
  let component: WithnavbarComponent;
  let fixture: ComponentFixture<WithnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
