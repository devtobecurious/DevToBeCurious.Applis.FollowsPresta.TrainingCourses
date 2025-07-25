import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GET_ALL_TRAINING_COURSES_RAW, GetAllTrainingCoursesBusiness } from '../../services/get-all-training-courses-business';
import { SelectTrainingCourses } from '../select-training-courses/select-training-courses';
import { GetAllTrainingCentersBusiness } from '../../services/get-all-training-centers-business';
import { SelectTrainingCenters } from '../select-training-centers/select-training-centers';
import { GetAllRawTrainingCourses } from '../../services/get-all-raw-training-courses';
import { GET_ALL_URL } from 'dtbc-core';
import { FakeGetAllTrainingCourses } from '../../services/mock/fake-get-all-training-courses';
import { getAllRawTrainingCoursesFactory } from '../../services/factories/training-courses-services.factories';

@Component({
  selector: 'lfpa-add-new-session',
  imports: [ReactiveFormsModule, SelectTrainingCourses, SelectTrainingCenters],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css',
  providers: [
    GetAllTrainingCoursesBusiness,
    { provide: GET_ALL_URL, useValue: 'training-courses' },
    { provide: GET_ALL_TRAINING_COURSES_RAW, useFactory: getAllRawTrainingCoursesFactory }
  ]
})
export class AddNewSession {
  private readonly formBuilder = inject(FormBuilder);
  private readonly getAllTrainingCoursesBusiness = inject(GetAllTrainingCoursesBusiness)

  protected readonly trainingCourses = this.getAllTrainingCoursesBusiness.getAll()
  protected readonly isTrainingCourseLoading = this.getAllTrainingCoursesBusiness.isLoading()
  private readonly getAllTrainingCentersBusiness = inject(GetAllTrainingCentersBusiness)
  protected readonly trainingCenters = this.getAllTrainingCentersBusiness.getAll()
  protected readonly isTrainingCenterLoading = this.getAllTrainingCentersBusiness.isLoading()

  protected readonly sessionForm = this.formBuilder.group({
    courseCenterId: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    trainingCourseId: [0, Validators.required],
  });


}
