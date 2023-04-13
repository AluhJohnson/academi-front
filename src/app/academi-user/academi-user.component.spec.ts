import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiUserComponent } from './academi-user.component';

describe('AcademiUserComponent', () => {
  let component: AcademiUserComponent;
  let fixture: ComponentFixture<AcademiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
