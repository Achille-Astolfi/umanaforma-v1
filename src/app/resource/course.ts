import { CourseCandidates } from './course-candidates';

export interface Course {
    id: number,
    description: string,
    subscriptions?: CourseCandidates[]
}
