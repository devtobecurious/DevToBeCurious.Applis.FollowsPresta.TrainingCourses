import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { GET_ALL_URL } from 'dtbc-core';
import { getAllRawTrainingCentersFactory } from '../../services/factories/training-centers-services.factories';
import { GET_ALL_TRAINING_CENTERS_RAW, GetAllTrainingCentersBusiness } from '../../services/get-all-training-centers-business';

@Component({
  selector: 'lfpa-select-training-centers',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-centers.html',
  styleUrl: './select-training-centers.css',
  providers: [
    GetAllTrainingCentersBusiness,
    { provide: GET_ALL_URL, useValue: 'training-centers' },
    { provide: GET_ALL_TRAINING_CENTERS_RAW, useFactory: getAllRawTrainingCentersFactory },
  ]
})
export class SelectTrainingCenters {
  private readonly getAllTrainingCentersBusiness = inject(GetAllTrainingCentersBusiness)
  protected readonly trainingCenters = this.getAllTrainingCentersBusiness.getAll()
  protected readonly isLoading = this.getAllTrainingCentersBusiness.isLoading
}
