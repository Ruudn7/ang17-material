

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICourse} from "../models/course";
import {map} from "rxjs/operators";
import {ILesson} from "../models/lesson";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    findCourseById(courseId: number): Observable<ICourse> {
        return this.http.get<ICourse>(`/api/courses/${courseId}`);
    }

    findAllCourses(): Observable<ICourse[]> {
        return this.http.get('/api/courses')
            .pipe(
                map((res: any) => res.payload)
            );
    }

    findAllCourseLessons(courseId:number): Observable<ILesson[]> {
        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map((res: any) =>  res.payload)
        );
    }

    findLessons(
        courseId:number, sortOrder = 'asc',
        pageNumber = 0, pageSize = 3, sortColumn = 'seqNo'):  Observable<ILesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
                .set('sortColumn', sortColumn)
        }).pipe(
            map((res: any) =>  res.payload)
        );
    }

}