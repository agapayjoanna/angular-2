import {Component} from 'angular2/core';

@Component({
    selector: 'div.login-panel',
    template: `
        <div class="login-header">
            <p class="welcome">WELCOME!</p>
            <p class="wel-msg">Please select your login method</p>
        </div>
        <div class="login-msg">Lorem Ipsum Ipsum de sata motor de quello de abante de atras in short atras abante. Ambot unsay sunod.</div>
        <div class="login-alternative"><a href="#">Login with user ID</a></div>
        <div class="clearfix"></div>
        <div class="login-method">
            <a href="#" class="login-option-1">Facebook</a>
            <a href="#" class="login-option-2">Twitter</a>
        </div>
        <div class="warning">
            <p class="warning-header">WARNING!</p>
            <p class="warning-msg">
                The user is reminded that he is logging into a program or data that is used directly in connection with or necessary for the security, defence or international relations of Banana Republic. Any unauthorised access, use, modification, interception, or obstruction of use (including such attempts) of the computer, program or data would attract an enhanced penalty (for an offence involving protected computers) under the Banana Misuse Act.
                If found guilty, an offender can be fined up to $100,000 and/or imprisoned up to 20 years. If you are not authorised to use this system, do not log in or attempt to log in.
            </p>
        </div>
    `
})
export class LoginPanelComponent{

}