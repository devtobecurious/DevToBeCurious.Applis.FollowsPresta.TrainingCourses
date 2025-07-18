import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TrainingCourseList } from '../models';
import { Observable, retry, shareReplay } from 'rxjs';

/**
 * @description Service to get all training courses
 * @property {HttpClient} http - The http client
 * @property {Observable<TrainingCourseList>} list$ - The list of training courses
 * @method getAll - Get all training courses
 */
@Injectable({
  providedIn: 'root'
})
export class GetAllTrainingCourses {
  private readonly http = inject(HttpClient)
  private readonly list$ = this.http.get<TrainingCourseList>(`training-courses`).pipe(
    shareReplay(1),
    retry(1)
  )

  getAll() {
    return this.list$
  }
}
