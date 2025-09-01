import { Component, forwardRef, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { GET_ALL_URL } from 'dtbc-core';
import { getAllRawTrainingCentersFactory } from '../../services/factories/training-centers-services.factories';
import { GET_ALL_TRAINING_CENTERS_RAW, GetAllTrainingCentersBusiness } from '../../services/get-all-training-centers-business';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TrainingCenterIdStore } from '../../services/store/training-center-id-store';

@Component({
  selector: 'lfpa-select-training-centers',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
  templateUrl: './select-training-centers.html',
  styleUrl: './select-training-centers.css',
  providers: [
    GetAllTrainingCentersBusiness,
    { provide: GET_ALL_URL, useValue: 'training-centers' },
    { provide: GET_ALL_TRAINING_CENTERS_RAW, useFactory: getAllRawTrainingCentersFactory },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTrainingCenters),
      multi: true
    }
  ]
})
export class SelectTrainingCenters implements ControlValueAccessor {
  private readonly getAllTrainingCentersBusiness = inject(GetAllTrainingCentersBusiness)
  private readonly trainingCenterStore = inject(TrainingCenterIdStore)
  protected readonly trainingCenters = this.getAllTrainingCentersBusiness.getAll()
  protected readonly isLoading = this.getAllTrainingCentersBusiness.isLoading

  trainingCenterId = signal<number>(0)
  private onChange = (id: number) => {}
  private onTouched = () => {}

  selectId(id: number) {
    this.trainingCenterStore.dispatch(id)
    this.onChange(id)
    this.writeValue(id)
  }

  writeValue(id: number): void {
    this.trainingCenterId.set(id)
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
