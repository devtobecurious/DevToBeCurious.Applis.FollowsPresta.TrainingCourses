import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"
import { TrainingCourse } from "../../models"

/**
 * @description Store the training course
 */
@Injectable({
  providedIn: 'root'
})
export class TrainingCourseStore {
  private readonly trainingCourseSelected = new BehaviorSubject<TrainingCourse | undefined>(undefined)

  /**
   * @description Dispatch the training course
   * @param course - The training course
   */
  dispatch(course: TrainingCourse): void {
    this.trainingCourseSelected.next(course)
  }

  get trainingCourse(): Observable<TrainingCourse | undefined> {
    return this.trainingCourseSelected.asObservable()
  }
}
