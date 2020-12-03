import { Candidate } from '../resource/candidate';

export interface ElencoCandidatiResponse {
    _embedded: {
        candidates: Candidate[]
    }
}