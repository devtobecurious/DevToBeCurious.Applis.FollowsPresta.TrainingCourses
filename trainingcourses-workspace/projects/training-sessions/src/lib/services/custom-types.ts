import { GetAll } from "dtbc-core";
import { TrainingCourseList } from "../models";
import { TrainingCenterList } from "../models/training-center";

/**
 * @description Interface to get all training courses
 * @extends {GetAll<TrainingCourseList>} - The interface to get all training courses
 */
export interface GetAllTrainingCourses extends GetAll<TrainingCourseList> {
}


/**
 * @description Interface to get all training centers
 * @extends {GetAll<TrainingCenterList>} - The interface to get all training centers
 */
export interface GetAllTrainingCenters extends GetAll<TrainingCenterList> {
}
