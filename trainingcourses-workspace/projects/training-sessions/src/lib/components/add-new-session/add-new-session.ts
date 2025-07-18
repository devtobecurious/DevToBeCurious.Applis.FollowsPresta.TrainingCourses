import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetAllTrainingCoursesBusiness } from '../../services/get-all-training-courses-business';
import { SelectTrainingCourses } from '../select-training-courses/select-training-courses';

@Component({
  selector: 'lfpa-add-new-session',
  imports: [ReactiveFormsModule, SelectTrainingCourses],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css'
})
export class AddNewSession {
  private readonly getAllTrainingCoursesBusiness = inject(GetAllTrainingCoursesBusiness)
  private readonly formBuilder = inject(FormBuilder);

  protected readonly trainingCourses = this.getAllTrainingCoursesBusiness.getAll()
  protected readonly isTrainingCourseLoading = this.getAllTrainingCoursesBusiness.isLoading()

  protected readonly sessionForm = this.formBuilder.group({
    courseCenterId: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    trainingCourseId: [0, Validators.required],
  });


}
