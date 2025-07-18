import { inject, Injectable, resource, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetAllRawTrainingCourses } from './get-all-raw-training-courses';
import { TrainingCourseList } from '../models';


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
export class GetAllTrainingCoursesBusiness {
  private readonly getAllTrainingCourses = inject(GetAllRawTrainingCourses)
  private readonly trainingCourseResource = rxResource({
    defaultValue: [],
    stream: () => this.getAllTrainingCourses.getAll()
  })

  getAll(): Signal<TrainingCourseList> {
    return this.trainingCourseResource.value
  }

  isLoading(): Signal<boolean> {
    return this.trainingCourseResource.isLoading
  }

  error(): Signal<Error | undefined> {
    return this.trainingCourseResource.error
  }

}
