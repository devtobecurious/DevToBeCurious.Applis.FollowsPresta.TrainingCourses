import { Signal } from "@angular/core"

/**
 * @description Interface to get all items from business part
 * @template T - The type of the items
 * @method getAll - Get all items
 */
export interface GetAllBusiness<T extends object> {
  getAll(): Signal<T | undefined>
}
