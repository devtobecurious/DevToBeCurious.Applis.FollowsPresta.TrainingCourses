import { Routes } from "@angular/router";
import { AddNewSession } from "./components/add-new-session/add-new-session";

export const sessionsRoutes: Routes = [
  {
    path: 'new-one',
    component: AddNewSession
  }
]
