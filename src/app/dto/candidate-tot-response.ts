import { Candidate } from '../resources/candidate';

export interface CandidateTotResponse {
    _embedded: {
        candidates: Candidate[]
        }
}
