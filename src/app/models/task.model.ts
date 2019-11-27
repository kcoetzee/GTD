export class TaskModel {
    constructor(
    public Id: string,
    public Name: string,
    public List: string,
    public Project: string,
    public Completed: boolean,
    public CompletedByDate: Date,
    public Tags: string[],
    public Deleted: boolean,
    public Editing: boolean) {}
}