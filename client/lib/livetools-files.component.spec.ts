import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetoolsFilesComponent } from './livetools-files.component';

describe('LivetoolsFilesComponent', () => {
  let component: LivetoolsFilesComponent;
  let fixture: ComponentFixture<LivetoolsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetoolsFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetoolsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
