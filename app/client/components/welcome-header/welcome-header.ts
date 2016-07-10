/**
 * Created by mjwheatley on 3/2/16.
 */
import {Component} from '@angular/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import template from './welcome-header.html';

@Component({
    template,
    selector: 'welcome-header',
    directives: [IONIC_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class WelcomeHeaderComponent {
    constructor(private translate:TranslateService) {
    }
}
