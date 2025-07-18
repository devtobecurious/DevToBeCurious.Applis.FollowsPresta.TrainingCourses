import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TrainingCourseList } from '../../models';

@Component({
  selector: 'lfpa-select-training-courses',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-courses.html',
  styleUrl: './select-training-courses.css'
})
export class SelectTrainingCourses {
  trainingCourses = input.required<TrainingCourseList>()
  isLoading = input.required<boolean>()
}
