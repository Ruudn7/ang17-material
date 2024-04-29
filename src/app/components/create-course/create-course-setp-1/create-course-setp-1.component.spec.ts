import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseSetp1Component } from './create-course-setp-1.component';

describe('CreateCourseSetp1Component', () => {
  let component: CreateCourseSetp1Component;
  let fixture: ComponentFixture<CreateCourseSetp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCourseSetp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCourseSetp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
