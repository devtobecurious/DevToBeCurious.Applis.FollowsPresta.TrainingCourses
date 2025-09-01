import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectTrainingCenters } from '../select-training-centers/select-training-centers';
import { SelectTrainingCourses } from '../select-training-courses/select-training-courses';
import { DatePickerWithLabel } from '../date-picker-with-label/date-picker-with-label';
import { TrainingCourseStore } from '../../services/store/training-course-store';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'lfpa-add-new-session',
  imports: [ReactiveFormsModule, SelectTrainingCourses, SelectTrainingCenters, DatePickerWithLabel, JsonPipe],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css',
})
export class AddNewSession implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly trainingCourseStore = inject(TrainingCourseStore);
  //protected readonly trainingCourse = toSignal(this.trainingCourseStore.trainingCourse);

  ngOnInit(): void {
    this.trainingCourseStore.trainingCourse
    .subscribe((course) => {
      this.sessionForm.patchValue({
        trainingCourseId: course?.id,
        nbDays: course?.defaultNbDays,
      });
    });
  }


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
