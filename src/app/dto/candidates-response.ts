import { Candidate } from '../resource/candidate';

export interface CandidatesResponse {
    id: number,
    description: string,
    subscriptions: {
        id: number,
        candidate: Candidate
    }[]
}
