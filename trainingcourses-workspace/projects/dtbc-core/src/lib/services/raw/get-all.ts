import { Observable } from "rxjs";

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
