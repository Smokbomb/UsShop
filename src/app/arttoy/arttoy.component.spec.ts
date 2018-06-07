import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArttoyComponent } from './arttoy.component';

describe('ArttoyComponent', () => {
  let component: ArttoyComponent;
  let fixture: ComponentFixture<ArttoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArttoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArttoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
