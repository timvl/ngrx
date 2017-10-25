import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressOverviewTableComponent } from './address-overview-table.component';

describe('AddressOverviewTableComponent', () => {
  let component: AddressOverviewTableComponent;
  let fixture: ComponentFixture<AddressOverviewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressOverviewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
