import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AddressImpl} from '../model/address';

@Component({
  selector: 'app-create-address',
  template: `
    <form [formGroup]="addressForm" (ngSubmit)="onSubmit()" novalidate>
      <label class="center-block">Name:
        <input class="form-control" formControlName="name">
      </label>
      <br/>
      <label class="center-block">Street:
        <input class="form-control" formControlName="street">
      </label>
      <br/>
      <label class="center-block">Number:
        <input class="form-control" formControlName="number">
      </label>
      <br/>
      <label class="center-block">Zip:
        <input class="form-control" formControlName="zip">
      </label>
      <br/>
      <label class="center-block">City:
        <input class="form-control" formControlName="city">
      </label>
      <button type="submit" [disabled]="!addressForm.valid" class="btn btn-success">Save</button> &nbsp;
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
