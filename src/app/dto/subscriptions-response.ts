import { Candidate } from '../resources/candidate';
import { Course } from '../resources/course';

export interface SubscriptionsResponse {
    id: number;
    candidate: Candidate;
    course: Course;
}
