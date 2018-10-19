export class CreatePostDto{
    readonly content: string;
    readonly createdBy?: string; // TODO: required
}