import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutnavbarComponent } from './withoutnavbar.component';

describe('WithoutnavbarComponent', () => {
  let component: WithoutnavbarComponent;
  let fixture: ComponentFixture<WithoutnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
