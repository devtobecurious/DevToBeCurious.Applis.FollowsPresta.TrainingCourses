import { Observable } from "rxjs";
import { TrainingCourseList } from "../models";

/**
 * @description Interface to get all items
 * @template T - The type of the items
 * @method getAll - Get all items
 */
export interface GetAll<T extends object> {
  /**
   * @description Get all items
   * @returns {Observable<T>} - The observable of the items
   */
  getAll(): Observable<T>
}

/**
 * @description Interface to get all training courses
 * @extends {GetAll<TrainingCourseList>} - The interface to get all training courses
 */
export interface GetAllTrainingCourses extends GetAll<TrainingCourseList> {
}
