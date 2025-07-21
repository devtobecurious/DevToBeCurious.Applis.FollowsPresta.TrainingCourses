import { inject, InjectionToken, Signal } from "@angular/core"
import { GetAllBusiness } from "./get-all"
import { GetAll } from "../raw/get-all"
import { rxResource } from '@angular/core/rxjs-interop';

export const GET_ALL_X_BUSINESS = new InjectionToken<GetAllBusiness<any>>('get-all-x-business');

/**
 * @description Abstract class to get all items from a business part
 * @template T - The type of the items
 * @method getAll - Get all items
 */
export abstract class GetAllXBusiness<T extends object> implements GetAllBusiness<T> {
  getAll(): Signal<T> {
    throw new Error("Method not implemented.");
  }
  // private readonly getAll !: GetAll<T> = inject(GET_ALL_X_BUSINESS)
  // private readonly itemResource = rxResource({
  //   defaultValue: [],
  //   stream: () => this.getAll.getAll()
  // })

  // getAll(): Signal<T> {
  //   return this.itemResource.value
  // }

  // isLoading(): Signal<boolean> {
  //   return this.itemResource.isLoading
  // }

  // error(): Signal<Error | undefined> {
  //   return this.itemResource.error
  // }

}
