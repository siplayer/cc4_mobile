import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GagnantPage } from './gagnant.page';

describe('GagnantPage', () => {
  let component: GagnantPage;
  let fixture: ComponentFixture<GagnantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GagnantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GagnantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
