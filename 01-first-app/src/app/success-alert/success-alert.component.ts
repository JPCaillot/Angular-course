import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: '<h4>Success!</h4>',
    styles: [`
        h4 {
            padding: 20px;
            color: green;
            background-color: rgb(75, 155, 75, 0.3);
            border: 1px solid green;
        }   
    `]
})
export class SuccessAlertComponent {
}