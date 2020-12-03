import { Candidate } from './candidate';
import { CourseCandidates } from './course-candidates';

export interface Course {
    id: number,
    description: string,
    subscriptions?: CourseCandidates[]
}
