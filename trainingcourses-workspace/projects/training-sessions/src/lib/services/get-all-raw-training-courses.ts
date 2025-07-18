import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { TrainingCourseList } from '../models';
import { Observable, retry, shareReplay } from 'rxjs';
import { GetAllTrainingCourses } from './custom-types';
import { FakeGetAllTrainingCourses } from './mock/fake-get-all-training-courses';

/**
 * @description Service to get all training courses
 * @property {HttpClient} http - The http client
 * @property {Observable<TrainingCourseList>} list$ - The list of training courses
 * @method getAll - Get all training courses
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => {
    let service: GetAllTrainingCourses
    if (isDevMode()) {
      service = new FakeGetAllTrainingCourses()
    } else {
      throw new Error('GetAllRawTrainingCourses is not available in production')
    }
    return service
  }
})
export class GetAllRawTrainingCourses implements GetAllTrainingCourses {
  private readonly http = inject(HttpClient)
  private readonly list$ = this.http.get<TrainingCourseList>(`training-courses`).pipe(
    shareReplay(1),
    retry(1)
  )

  getAll(): Observable<TrainingCourseList> {
    return this.list$
  }
}
