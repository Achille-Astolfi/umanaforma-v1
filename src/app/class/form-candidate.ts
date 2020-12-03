export class FormCandidate {
    id?: number;
    firstName = "";
    lastName = "";
    emailAddress = "";

    clear(): void{
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
    }
}