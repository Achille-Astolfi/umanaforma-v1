export class FormCandidate {
    id?: number;
    firstName!: string;
    lastName!: string;
    emailAddress!: string;

    clear(): void{
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
    }
}