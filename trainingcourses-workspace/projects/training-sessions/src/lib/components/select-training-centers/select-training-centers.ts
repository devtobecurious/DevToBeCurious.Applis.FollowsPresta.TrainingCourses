import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TrainingCenterList } from '../../models/training-center';

@Component({
  selector: 'lfpa-select-training-centers',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-centers.html',
  styleUrl: './select-training-centers.css',
  providers: [

  ]
})
export class SelectTrainingCenters {
  trainingCenters = input.required<TrainingCenterList>()
  isLoading = input.required<boolean>()
}
