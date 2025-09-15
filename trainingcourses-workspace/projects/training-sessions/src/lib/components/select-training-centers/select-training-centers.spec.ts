import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTrainingCenters } from './select-training-centers';

describe('SelectTrainingCenters', () => {
  let component: SelectTrainingCenters;
  let fixture: ComponentFixture<SelectTrainingCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTrainingCenters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTrainingCenters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
