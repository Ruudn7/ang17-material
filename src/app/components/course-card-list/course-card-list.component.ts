import { MatCardModule } from '@angular/material/card';
import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/course';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-card-list',
  standalone: true,
  imports: [ MatCardModule, CommonModule, MatButtonModule, RouterModule],
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.scss'
})
export class CourseCardListComponent {



  @Input() courses!: ICourse[] | null;

  cols = 1;

  rowHeight = '500px';

  handsetPortrait = false;


  constructor(private dialog: MatDialog,
    private responsive: BreakpointObserver) {
  }

  ngOnInit() {
  }

  editCourse(course: ICourse): void {


  }


}

