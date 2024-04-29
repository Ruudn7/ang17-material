import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateCourseSetp1Component } from './create-course-setp-1/create-course-setp-1.component';
import { CreateCourseSetp2Component } from './create-course-setp-2/create-course-setp-2.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [MatStepperModule, CreateCourseSetp1Component, CreateCourseSetp2Component, MatButtonModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {

}
