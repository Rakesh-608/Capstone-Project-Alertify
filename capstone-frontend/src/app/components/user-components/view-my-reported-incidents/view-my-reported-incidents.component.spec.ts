import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyReportedIncidentsComponent } from './view-my-reported-incidents.component';

describe('ViewMyReportedIncidentsComponent', () => {
  let component: ViewMyReportedIncidentsComponent;
  let fixture: ComponentFixture<ViewMyReportedIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMyReportedIncidentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyReportedIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
