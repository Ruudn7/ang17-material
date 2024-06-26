import { CourseCardListComponent } from './../course-card-list/course-card-list.component';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map } from 'rxjs';
import { ICourse } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTabsModule, CourseCardListComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  beginnerCourses$!: Observable<ICourse[]>;

  advancedCourses$!: Observable<ICourse[]>;

  constructor(private coursesService: CoursesService) {}
  
  ngOnInit(): void {

      const courses$ = this.coursesService.findAllCourses();

      this.beginnerCourses$ = courses$.pipe(
        map((courses: ICourse[]) => courses.filter(course => course.category === 'BEGINNER') )
      );

      this.advancedCourses$ = courses$.pipe(
          map((courses: ICourse[]) => courses.filter(course => course.category === 'ADVANCED') )
      );

  }

}
