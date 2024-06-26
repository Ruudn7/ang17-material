import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)},
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent)},
    { path: 'courses/:id', loadComponent: () => import('./components/course/course.component').then(mod => mod.CourseComponent)},
    { path: 'add-new-course', loadComponent: () => import('./components/create-course/create-course.component').then(mod => mod.CreateCourseComponent)},
    { path: 'regex', loadComponent: () => import('./components/regex-page/regex-page.component').then(mod => mod.RegexPageComponent)},
    { path: 'regex-extended', loadComponent: () => import('./components/regex-extended-page/regex-extended-page.component').then(mod => mod.RegexExtendedPageComponent)}
];
