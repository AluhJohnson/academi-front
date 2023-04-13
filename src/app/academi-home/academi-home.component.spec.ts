import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiHomeComponent } from './academi-home.component';

describe('AcademiHomeComponent', () => {
  let component: AcademiHomeComponent;
  let fixture: ComponentFixture<AcademiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
