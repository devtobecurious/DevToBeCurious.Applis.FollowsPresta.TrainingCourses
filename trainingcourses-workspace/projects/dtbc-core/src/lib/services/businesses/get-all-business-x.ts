import { inject, InjectionToken, Signal } from "@angular/core"
import { GetAllBusiness } from "./get-all-business"
import { GetAllRaw } from "../raw/get-all-raw"
import { rxResource } from '@angular/core/rxjs-interop';

/**
 * @description Abstract class to get all items from a business part
 * @template T - The type of the items
 * @method getAll - Get all items
 */
export abstract class GetAllBusinessX<T extends object> implements GetAllBusiness<T> {
  private readonly getAllRawService: GetAllRaw<T>

  private readonly itemsResource = rxResource({
    stream: () => this.getAllRawService.getAll()
  })

  constructor(token: InjectionToken<GetAllRaw<T>>) {
    this.getAllRawService = inject(token)
  }

  getAll(): Signal<T | undefined> {
    return this.itemsResource.value
  }

  get isLoading(): Signal<boolean> {
    return this.itemsResource.isLoading
  }

  get error(): Signal<Error | undefined> {
    return this.itemsResource.error
  }
}
