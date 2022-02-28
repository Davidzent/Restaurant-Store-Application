import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePagesComponent } from './purchase-pages.component';

describe('PurchasePagesComponent', () => {
  let component: PurchasePagesComponent;
  let fixture: ComponentFixture<PurchasePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
