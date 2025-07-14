import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'lib-add-new-session',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-new-session.html',
  styleUrl: './add-new-session.css'
})
export class AddNewSession {
  private readonly formBuilder = inject(FormBuilder);
  protected readonly sessionForm = this.formBuilder.group({
    courseCenterId: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    trainingCourseId: [0, Validators.required],
  });
}
