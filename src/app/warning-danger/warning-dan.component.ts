import { Component } from '@angular/core';

@Component({
    selector: 'warning-danger',
    template: `
        <p> you are in danger! </p>
    `,
    styles: [
        `
        p{
            padding: 10px;
            background-color: mistyrose;
            border: 1px solid red
        }
    `
    ]
})

export class WarningDanger {

}