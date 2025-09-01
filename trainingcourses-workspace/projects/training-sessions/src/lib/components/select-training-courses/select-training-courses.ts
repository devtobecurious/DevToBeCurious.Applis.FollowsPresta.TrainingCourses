import { Component, forwardRef, inject, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { GET_ALL_URL } from 'dtbc-core';
import { getAllRawTrainingCoursesFactory } from '../../services/factories/training-courses-services.factories';
import { GET_ALL_TRAINING_COURSES_RAW, GetAllTrainingCoursesBusiness } from '../../services/get-all-training-courses-business';
import { TrainingCourseStore } from '../../services/store/training-course-store';

@Component({
  selector: 'lfpa-select-training-courses',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-courses.html',
  styleUrl: './select-training-courses.css',
  providers: [
    GetAllTrainingCoursesBusiness,
    { provide: GET_ALL_URL, useValue: 'training-courses' },
    { provide: GET_ALL_TRAINING_COURSES_RAW, useFactory: getAllRawTrainingCoursesFactory },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTrainingCourses),
      multi: true
    }
  ]
})
export class SelectTrainingCourses implements ControlValueAccessor {
  private readonly getAllTrainingCoursesBusiness = inject(GetAllTrainingCoursesBusiness)
  protected readonly trainingCourses = this.getAllTrainingCoursesBusiness.getAll()
  protected readonly isLoading = this.getAllTrainingCoursesBusiness.isLoading
  private readonly trainingCourseStore = inject(TrainingCourseStore)

  trainingCourseId = signal<number>(0)
  private onChange = (id: number) => {}
  private onTouched = () => {}

  selectId(id: number) {
    const courses = this.trainingCourses()

    if(courses) {
      const course = courses.find((course) => course.id === id)
      if(course) {
        this.trainingCourseStore.dispatch(course)
      }
    }

    this.onChange(id)
    this.writeValue(id)
  }

  writeValue(id: number): void {
    this.trainingCourseId.set(id)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
