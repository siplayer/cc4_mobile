import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerciPage } from './merci.page';

describe('MerciPage', () => {
  let component: MerciPage;
  let fixture: ComponentFixture<MerciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerciPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
