import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddSessionDto, Session } from '../../models/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewTrainingSessionBusiness {
  private readonly http = inject(HttpClient)

  /**
   * @description Adds a new training session
   * @param session - The training session to add
   * @returns The training session that was added
   */
  addOne(session: AddSessionDto): Observable<Session> {
    return this.http.post<Session>(`api/sessions`, session)
  }
}
