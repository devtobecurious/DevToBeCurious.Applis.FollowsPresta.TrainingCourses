import { isDevMode } from "@angular/core"
import { GetAllTrainingCourses } from "../custom-types"
import { FakeGetAllTrainingCourses } from "../mock/fake-get-all-training-courses"

export const getAllRawTrainingCoursesFactory = () => {
  let service: GetAllTrainingCourses
  if (isDevMode()) {
    service = new FakeGetAllTrainingCourses()
  } else {
    throw new Error('GetAllRawTrainingCourses is not available in production')
  }
  return service
}
