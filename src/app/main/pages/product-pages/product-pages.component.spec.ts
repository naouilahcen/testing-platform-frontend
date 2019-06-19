import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPagesComponent } from './product-pages.component';

describe('ProductPagesComponent', () => {
  let component: ProductPagesComponent;
  let fixture: ComponentFixture<ProductPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
