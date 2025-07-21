import { GetAll } from "dtbc-core";
import { TrainingCourseList } from "../models";

/**
 * @description Interface to get all training courses
 * @extends {GetAll<TrainingCourseList>} - The interface to get all training courses
 */
export interface GetAllTrainingCourses extends GetAll<TrainingCourseList> {
}
