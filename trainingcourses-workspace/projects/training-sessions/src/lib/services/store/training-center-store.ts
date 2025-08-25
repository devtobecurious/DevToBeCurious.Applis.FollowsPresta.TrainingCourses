import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingCenterStore {
  private readonly trainingCenterSelected = new BehaviorSubject<number>(0)

  /**
   * @description Dispatch the training center id
   * @param id - The training center id
   */
  dispatch(id: number): void {
    this.trainingCenterSelected.next(id)
  }

  get trainingCenterId(): Observable<number> {
    return this.trainingCenterSelected.asObservable()
  }
}
