import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiLoginComponent } from './academi-login.component';

describe('AcademiLoginComponent', () => {
  let component: AcademiLoginComponent;
  let fixture: ComponentFixture<AcademiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
