export type SessionStatusLabel = 'Draft' | 'Published' | 'Cancelled'

/**
 * @description Represents the status of a session
 */
export interface SessionStatus {
  label: SessionStatusLabel
}

/**
 * @description Represents a session
 */
export interface Session {
  id: number
  courseCenterId: number
  trainingCourseId: number
  startDate: Date
  endDate: Date
  status: SessionStatus
  nbDays: number
}

/**
 * @description Represents the data transfer object for adding a session
 */
export type AddSessionDto = Omit<Session, 'id' | 'status'>

/**
 * @description Represents the data transfer object for updating a session
 */
export type UpdateSessionDto = Partial<Session>
