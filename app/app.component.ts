import {Component} from 'angular2/core';
import {HeadlineComponent} from './headline.component';
import {GroupSelection} from './group.selection.component';
import {LoginPanelComponent} from './loginpanel.component';
import {FooterComponent} from './footer.component';
@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="logo">
                <img src="app/img/logo.jpg"/>
            </div>
        </header>
        <div class="test"></div>
        <div class="user-selection"></div>
        <div class="login-panel"></div>
        <div class="footer"></div>
    `,
    directives: [HeadlineComponent,GroupSelection, LoginPanelComponent, FooterComponent]
})
export class AppComponent { }