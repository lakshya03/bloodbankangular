import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchoperatorComponent } from './fetchoperator.component';

describe('FetchoperatorComponent', () => {
  let component: FetchoperatorComponent;
  let fixture: ComponentFixture<FetchoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
