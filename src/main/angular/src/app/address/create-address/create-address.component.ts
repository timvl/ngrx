import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AddressImpl} from '../model/address';

@Component({
  selector: 'app-create-address',
  template: `
    <form [formGroup]="addressForm" (ngSubmit)="onSubmit()" novalidate>
      <section class="form-block">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="aForm_1" placeholder="Name" size="45" formControlName="name">
        </div>
        <div class="form-group">
          <label for="name">Street</label>
          <input type="text" id="aForm_1" placeholder="Street" size="45" formControlName="street">
        </div>
        <div class="form-group">
          <label for="name">Number</label>
          <input type="text" id="aForm_1" placeholder="Number" size="10" formControlName="number">
        </div>
        <div class="form-group">
          <label for="name">Zip</label>
          <input type="text" id="aForm_1" placeholder="Zip" size="45" formControlName="zip">
        </div>
        <div class="form-group">
          <label for="name">City</label>
          <input type="text" id="aForm_1" placeholder="City" size="45" formControlName="city">
        </div>
        <button type="submit" [clrLoading]="loading$ | async" class="btn btn-info-outline" [disabled]="!addressForm.valid">Submit</button>
      </section>
    </form>
  `,
  styles: []
})
export class CreateAddressComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.addressForm = this.fb.group({
      name: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
  }

  ngOnChanges() {
    this.addressForm.reset();
  }

  onSubmit() {
    const form = this.addressForm.value;
    const address = new AddressImpl(form.name, form.street, form.number, form.zip, form.city);
    console.log(address);
    this.ngOnChanges();
  }
}
