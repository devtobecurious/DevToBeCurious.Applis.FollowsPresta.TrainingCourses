import { inject, Injectable, InjectionToken } from '@angular/core';
import { GetAllBusinessX, GetAllRaw } from 'dtbc-core';
import { TrainingCourseList } from '../../models';
import { map, Observable, switchMap } from 'rxjs';
import { TrainingCenterIdStore } from '../../services/store/training-center-id-store';

export const GET_ALL_TRAINING_COURSES_RAW = new InjectionToken<GetAllRaw<TrainingCourseList>>('GET_ALL_TRAINING_COURSES_RAW')

/**
 * @description Service to get all training courses
 * @method getAll - Get all training courses
 * @method isLoading - Check if the resource is loading
 * @method error - Get the error of the service
 */
@Injectable()
export class GetAllTrainingCoursesBusiness extends GetAllBusinessX<TrainingCourseList> {
  private readonly trainingCenterStore = inject(TrainingCenterIdStore)

  constructor() {
    super(GET_ALL_TRAINING_COURSES_RAW)
  }

  protected override getAllRawData(): Observable<TrainingCourseList> {
    const baseData$ = super.getAllRawData()
    return this.trainingCenterStore.trainingCenterId.pipe(
      switchMap((id) => baseData$.pipe(
        map((courses) => courses.filter((course) => course.centerId === id))
      ))
    )
  }
}
