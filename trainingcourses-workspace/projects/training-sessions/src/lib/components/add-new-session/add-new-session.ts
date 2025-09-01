import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectTrainingCenters } from '../select-training-centers/select-training-centers';
import { SelectTrainingCourses } from '../select-training-courses/select-training-courses';
import { DatePickerWithLabel } from '../date-picker-with-label/date-picker-with-label';


@Component({
  selector: 'lfpa-add-new-session',
  imports: [ReactiveFormsModule, SelectTrainingCourses, SelectTrainingCenters, DatePickerWithLabel],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css',
})
export class AddNewSession {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly sessionForm = this.formBuilder.nonNullable.group({
    courseCenterId: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    nbDays: [0, Validators.required],
    trainingCourseId: [0, Validators.required],
  });

  onSubmit() {
    console.log(this.sessionForm.value);
  }
}
