import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomptePage } from './newcompte.page';

describe('NewcomptePage', () => {
  let component: NewcomptePage;
  let fixture: ComponentFixture<NewcomptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomptePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
