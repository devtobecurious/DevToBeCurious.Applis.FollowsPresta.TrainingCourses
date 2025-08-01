import { Component, forwardRef, input, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lfpa-date-picker-with-label',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './date-picker-with-label.html',
  styleUrl: './date-picker-with-label.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerWithLabel),
      multi: true
    }
  ]
})
export class DatePickerWithLabel implements ControlValueAccessor {
  label = input.required<string>();

  dateValue = signal<Date | undefined>(undefined)
  private onChange = (date: Date) => {}
  private onTouched = () => {}

  selectDate(date: Date) {
    this.onChange(date)
    this.writeValue(date)
  }

  writeValue(date: Date): void {
    this.dateValue.set(date)
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
