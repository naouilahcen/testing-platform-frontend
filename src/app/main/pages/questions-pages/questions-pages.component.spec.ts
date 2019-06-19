import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPagesComponent } from './questions-pages.component';

describe('QuestionsPagesComponent', () => {
  let component: QuestionsPagesComponent;
  let fixture: ComponentFixture<QuestionsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
