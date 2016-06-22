
import {Component} from 'angular2/core';

@Component({
    selector: 'div.footer',
    template: `
        <div class="contact-us">
            <a href="#">Contact Us</a> |
            <a href="#">Privacy Statement</a> |
            <a href="#">Terms of Use</a>
        </div>
        <div class="copyright">
            <span>Lorem Ipsum Copy Right &copy; 2016</span>
        </div>
    `
})
export class FooterComponent{}