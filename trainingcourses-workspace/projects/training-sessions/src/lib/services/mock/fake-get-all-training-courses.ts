import { delay, Observable, of } from "rxjs";
import { GetAllTrainingCenters, GetAllTrainingCourses } from "../custom-types";
import { TrainingCourseList } from "../../models";
import { TrainingCenterList } from "../../models/training-center";

export class FakeGetAllTrainingCourses implements GetAllTrainingCourses {
  getAll(): Observable<TrainingCourseList> {
    const courses: TrainingCourseList = [
      {
        id: 1,
        name: 'Training Course 1',
        description: 'Description 1',
        defaultNbDays: 3,
        centerId: 1
      },
      {
        id: 2,
        name: 'Training Course 2',
        description: 'Description 2',
        defaultNbDays: 3,
        centerId: 2
      }
    ]

    return of(courses).pipe(delay(500))
  }
}
