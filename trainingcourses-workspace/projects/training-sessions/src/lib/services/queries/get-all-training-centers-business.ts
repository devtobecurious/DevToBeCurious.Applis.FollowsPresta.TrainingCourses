import { inject, Injectable, InjectionToken, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetAllBusiness, GetAllBusinessX, GetAllRaw } from 'dtbc-core';
import { TrainingCenterList } from '../../models/training-center';
import { GetAllRawTrainingCenters } from './get-all-raw-training-centers';

export const GET_ALL_TRAINING_CENTERS_RAW = new InjectionToken<GetAllRaw<TrainingCenterList>>('GET_ALL_TRAINING_CENTERS_RAW')

/**
 * @description Service to get all training courses
 * @property {GetAllTrainingCourses} getAllTrainingCourses - The service to get all training courses
 * @property {rxResource<TrainingCourseList>} trainingCourseResource - The resource to get all training courses
 * @method getAll - Get all training courses
 * @method isLoading - Check if the resource is loading
 * @method error - Get the error of the resource
 */
@Injectable()
export class GetAllTrainingCentersBusiness extends GetAllBusinessX<TrainingCenterList> {
  constructor() {
    super(GET_ALL_TRAINING_CENTERS_RAW)
  }
}
