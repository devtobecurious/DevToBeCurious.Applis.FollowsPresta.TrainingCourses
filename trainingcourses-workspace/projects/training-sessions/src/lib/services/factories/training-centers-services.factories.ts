import { isDevMode } from "@angular/core"
import { GetAllTrainingCenters } from "../custom-types"
import { FakeGetAllTrainingCenters } from "../mock/fake-get-all-training-centers"

export const getAllRawTrainingCentersFactory = () => {
  let service: GetAllTrainingCenters
  if (isDevMode()) {
    service = new FakeGetAllTrainingCenters()
  } else {
    throw new Error('GetAllRawTrainingCenters is not available in production')
  }
  return service
}
