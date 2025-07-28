import { inject, InjectionToken } from "@angular/core"
import { GetAllRaw } from "./get-all-raw"
import { HttpClient } from "@angular/common/http"
import { Observable, retry, shareReplay } from "rxjs"

export const GET_ALL_URL = new InjectionToken<string>('get-all-url');

/**
 * @description Class to get all items from a raw x
 * @template T - The type of the items
 * @method getAll - Get all items
 */
export class GetAllRawX<T extends object> implements GetAllRaw<T> {
  private readonly http = inject(HttpClient)
  private readonly url = inject(GET_ALL_URL)
  private readonly list$ = this.http.get<T>(this.url).pipe(
    shareReplay(1),
    retry(1)
  )

  getAll(): Observable<T> {
    return this.list$
  }
}
