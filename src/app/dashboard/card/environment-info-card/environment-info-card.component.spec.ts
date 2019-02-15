import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentInfoCardComponent } from './environment-info-card.component';

describe('EnvironmentInfoCardComponent', () => {
  let component: EnvironmentInfoCardComponent;
  let fixture: ComponentFixture<EnvironmentInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
