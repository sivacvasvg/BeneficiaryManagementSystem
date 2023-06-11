import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfBeneficiaryComponent } from './detail-of-beneficiary.component';

describe('DetailOfBeneficiaryComponent', () => {
  let component: DetailOfBeneficiaryComponent;
  let fixture: ComponentFixture<DetailOfBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOfBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
