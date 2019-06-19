import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationsPagesComponent } from './examinations-pages.component';

describe('ExaminationsPagesComponent', () => {
  let component: ExaminationsPagesComponent;
  let fixture: ComponentFixture<ExaminationsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
