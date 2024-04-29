import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseSetp2Component } from './create-course-setp-2.component';

describe('CreateCourseSetp2Component', () => {
  let component: CreateCourseSetp2Component;
  let fixture: ComponentFixture<CreateCourseSetp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCourseSetp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCourseSetp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
