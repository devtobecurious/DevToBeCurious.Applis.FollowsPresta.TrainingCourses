import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainingCourseStore } from '../../services/store/training-course-store';
import { DatePickerWithLabel } from '../date-picker-with-label/date-picker-with-label';
import { SelectTrainingCenters } from '../select-training-centers/select-training-centers';
import { SelectTrainingCourses } from '../select-training-courses/select-training-courses';
import { AddNewTrainingSessionBusiness } from '../../services/commands/add-new-training-session-business';

@Component({
  selector: 'lfpa-add-new-session',
  imports: [ReactiveFormsModule, SelectTrainingCourses, SelectTrainingCenters, DatePickerWithLabel, MatButtonModule],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css',
})
export class AddNewSession implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly trainingCourseStore = inject(TrainingCourseStore);
  private readonly addNewTrainingSessionBusiness = inject(AddNewTrainingSessionBusiness);

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
    const session = this.sessionForm.getRawValue();

    if (session && this.sessionForm.valid) {
      this.addNewTrainingSessionBusiness.addOne(session).subscribe({
        next: (session) => {
          console.log(session);
        }
      });
    }
  }
}
