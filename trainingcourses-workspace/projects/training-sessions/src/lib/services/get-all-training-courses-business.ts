import { Injectable, InjectionToken } from '@angular/core';
import { GetAllBusinessX, GetAllRaw } from 'dtbc-core';
import { TrainingCourseList } from '../models';

export const GET_ALL_TRAINING_COURSES_RAW = new InjectionToken<GetAllRaw<TrainingCourseList>>('GET_ALL_TRAINING_COURSES_RAW')

/**
 * @description Service to get all training courses
 * @method getAll - Get all training courses
 * @method isLoading - Check if the resource is loading
 * @method error - Get the error of the service
 */
@Injectable()
export class GetAllTrainingCoursesBusiness extends GetAllBusinessX<TrainingCourseList> {
  constructor() {
    super(GET_ALL_TRAINING_COURSES_RAW)
  }
}
