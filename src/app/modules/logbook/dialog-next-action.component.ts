import { Component } from '@angular/core';

@Component({
    selector:'gtd-dialog-next-action',
    templateUrl: './dialog-next-action.component.html',
    styleUrls: ['./dialog-next-action.component.css']
})
export class DialogNextActionComponent {
    nextActions: string[] = ["Yup", "Nice", "stop"];

    addAction(): void {
        this.nextActions.push("Yooh")
    }
}