/**
 * @description Training course model
 * @property {number} id - The id of the training course
 * @property {string} name - The name of the training course
 * @property {string} description - The description of the training course
 */
export interface TrainingCourse {
  id: number
  name: string
  description: string
}

/**
 * @description Training course list model
 * @property {TrainingCourse[]} trainingCourses - The list of training courses
 */
export type TrainingCourseList = TrainingCourse[]
