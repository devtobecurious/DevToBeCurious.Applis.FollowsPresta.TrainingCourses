import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { TrainingCourseList } from '../models';
import { Observable, retry, shareReplay } from 'rxjs';
import { GetAllTrainingCourses } from './custom-types';
import { FakeGetAllTrainingCourses } from './mock/fake-get-all-training-courses';
import { GetAllRawX } from 'dtbc-core';

/**
 * @description Service to get all training courses
 * @property {HttpClient} http - The http client
 * @property {Observable<TrainingCourseList>} list$ - The list of training courses
 * @method getAll - Get all training courses
 */
@Injectable({
  providedIn: 'root'
})
export class GetAllRawTrainingCourses extends GetAllRawX<TrainingCourseList> {
}
