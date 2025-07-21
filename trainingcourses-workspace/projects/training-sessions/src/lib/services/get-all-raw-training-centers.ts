import { inject, Injectable, isDevMode } from '@angular/core';
import { GetAllTrainingCenters } from './custom-types';
import { FakeGetAllTrainingCenters } from './mock/fake-get-all-training-centers';
import { HttpClient } from '@angular/common/http';
import { TrainingCenterList } from '../models/training-center';
import { Observable, shareReplay } from 'rxjs';
import { retry } from 'rxjs';

/**
 * @description Service to get all training courses
 * @property {HttpClient} http - The http client
 * @property {Observable<TrainingCourseList>} list$ - The list of training courses
 * @method getAll - Get all training courses
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => {
    let service: GetAllTrainingCenters
    if (isDevMode()) {
      service = new FakeGetAllTrainingCenters()
    } else {
      throw new Error('GetAllRawTrainingCenters is not available in production')
    }
    return service
  }
})
export class GetAllRawTrainingCenters implements GetAllTrainingCenters {
  private readonly http = inject(HttpClient)
  private readonly list$ = this.http.get<TrainingCenterList>(`training-courses`).pipe(
    shareReplay(1),
    retry(1)
  )

  getAll(): Observable<TrainingCenterList> {
    return this.list$
  }
}
