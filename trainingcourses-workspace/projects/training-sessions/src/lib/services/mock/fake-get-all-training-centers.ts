import { delay, Observable, of } from "rxjs";
import { TrainingCenterList } from "../../models/training-center";
import { GetAllTrainingCenters } from "../custom-types";

export class FakeGetAllTrainingCenters implements GetAllTrainingCenters {
  getAll(): Observable<TrainingCenterList> {
    const centers: TrainingCenterList = [
      {
        id: 1,
        name: 'Centre de formation 1'
      },
      {
        id: 2,
        name: 'Centre de formation 2'
      }
    ];

    return of(centers).pipe(delay(500));
  }
}
