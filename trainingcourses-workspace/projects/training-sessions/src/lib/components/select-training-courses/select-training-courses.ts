import { Component, inject, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { GET_ALL_URL } from 'dtbc-core';
import { TrainingCourseList } from '../../models';
import { GET_ALL_TRAINING_COURSES_RAW, GetAllTrainingCoursesBusiness } from '../../services/get-all-training-courses-business';
import { getAllRawTrainingCoursesFactory } from '../../services/factories/training-courses-services.factories';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lfpa-select-training-courses',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-courses.html',
  styleUrl: './select-training-courses.css',
  providers: [
    GetAllTrainingCoursesBusiness,
    { provide: GET_ALL_URL, useValue: 'training-courses' },
    { provide: GET_ALL_TRAINING_COURSES_RAW, useFactory: getAllRawTrainingCoursesFactory },
  ]
})
export class SelectTrainingCourses {
  private readonly getAllTrainingCoursesBusiness = inject(GetAllTrainingCoursesBusiness)
  protected readonly trainingCourses = this.getAllTrainingCoursesBusiness.getAll()
  protected readonly isLoading = this.getAllTrainingCoursesBusiness.isLoading
}
