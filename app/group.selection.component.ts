import {Component} from 'angular2/core';

@Component({
    selector: 'div.user-selection',
    template: `
        <div class="user-group">
            <h2>{{title}}</h2>
            <ul class="selection">
                <li *ngFor="#select of selections">
                    <a href="#">{{select}}</a>
                </li>
            </ul>
        </div>
    `
})

export class GroupSelection {
    title= "Or, you can explore the group you belong to.",
    selections= ["Pre-Enlistees","National Service", "In-service Personnel","NSmen","SAF VC Volunteers","Employers","Public"]
}

