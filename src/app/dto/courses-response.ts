import { Course } from '../resources/course';

export interface CoursesResponse {
    _embedded: {
        courses: Course[];
    }
}
