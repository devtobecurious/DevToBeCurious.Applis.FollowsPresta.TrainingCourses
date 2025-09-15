import { GetAllRaw } from "dtbc-core";
import { TrainingCourseList } from "../models";
import { TrainingCenterList } from "../models/training-center";

/**
 * @description Interface to get all training courses
 * @extends {GetAllRaw<TrainingCourseList>} - The interface to get all training courses
 */
export interface GetAllTrainingCourses extends GetAllRaw<TrainingCourseList> {
}


/**
 * @description Interface to get all training centers
 * @extends {GetAllRaw<TrainingCenterList>} - The interface to get all training centers
 */
export interface GetAllTrainingCenters extends GetAllRaw<TrainingCenterList> {
}
