import { inject, Injectable, isDevMode } from '@angular/core';
import { GetAllTrainingCenters } from '../custom-types';
import { FakeGetAllTrainingCenters } from '../mock/fake-get-all-training-centers';
import { HttpClient } from '@angular/common/http';
import { TrainingCenterList } from '../../models/training-center';
import { Observable, shareReplay } from 'rxjs';
import { retry } from 'rxjs';
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
export class GetAllRawTrainingCenters extends GetAllRawX<TrainingCenterList> {
}
