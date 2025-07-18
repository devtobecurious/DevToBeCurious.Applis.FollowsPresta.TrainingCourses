import { delay, Observable, of } from "rxjs";
import { GetAllTrainingCourses } from "../custom-types";
import { TrainingCourseList } from "../../models";

export class FakeGetAllTrainingCourses implements GetAllTrainingCourses {
  getAll(): Observable<TrainingCourseList> {
    const courses: TrainingCourseList = [
      {
        id: 1,
        name: 'Training Course 1',
        description: 'Description 1'
      },
      {
        id: 2,
        name: 'Training Course 2',
        description: 'Description 2'
      }
    ]

    return of(courses).pipe(delay(500))
  }
}
