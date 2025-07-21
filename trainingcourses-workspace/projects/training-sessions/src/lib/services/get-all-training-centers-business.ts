import { inject, Injectable, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetAllBusiness } from 'dtbc-core';
import { TrainingCenterList } from '../models/training-center';
import { GetAllRawTrainingCenters } from './get-all-raw-training-centers';

/**
 * @description Service to get all training courses
 * @property {GetAllTrainingCourses} getAllTrainingCourses - The service to get all training courses
 * @property {rxResource<TrainingCourseList>} trainingCourseResource - The resource to get all training courses
 * @method getAll - Get all training courses
 * @method isLoading - Check if the resource is loading
 * @method error - Get the error of the resource
 */
@Injectable({
  providedIn: 'root'
})
export class GetAllTrainingCentersBusiness implements GetAllBusiness<TrainingCenterList> {
  private readonly getAllTrainingCenters = inject(GetAllRawTrainingCenters)
  private readonly trainingCenterResource = rxResource({
    defaultValue: [],
    stream: () => this.getAllTrainingCenters.getAll()
  })

  getAll(): Signal<TrainingCenterList> {
    return this.trainingCenterResource.value
  }

  isLoading(): Signal<boolean> {
    return this.trainingCenterResource.isLoading
  }

  error(): Signal<Error | undefined> {
    return this.trainingCenterResource.error
  }

}
