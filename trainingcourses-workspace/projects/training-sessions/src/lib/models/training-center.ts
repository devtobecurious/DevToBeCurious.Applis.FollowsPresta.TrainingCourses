/**
 * @description Training center model
 * @property {number} id - The id of the training center
 * @property {string} name - The name of the training center
 */
export interface TrainingCenter {
  id: number
  name: string
}

/**
 * @description Training center list model
 * @property {TrainingCenter[]} trainingCenters - The list of training centers
 */
export type TrainingCenterList = TrainingCenter[]
